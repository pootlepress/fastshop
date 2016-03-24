<?php

/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
class Fastshop_Wp_API {

	protected static $instance;

	static function instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	protected function __construct() {
		add_action( 'rest_api_init', array( $this, 'api_init' ) );
	}

	public function api_init() {
		register_rest_route( 'fastshop/v1', '/products', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'api_products' ),
		) );
		register_rest_route( 'fastshop/v1', '/product', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'api_product' ),
		) );
		register_rest_route( 'fastshop/v1', '/single', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'api_post' ),
		) );
		register_rest_route( 'fastshop/v1', '/posts', array(
			'methods'  => 'GET',
			'callback' => array( $this, 'api_posts' ),
		) );
	}

	/**
	 * Get products
	 * @return null|string Post data
	 */
	public function api_post() {
		return json_encode( $this->get_posts( array(
			'posts_per_page' => 1,
		) ) );
	}

	/**
	 * Get products
	 * @return null|string Post data
	 */
	public function api_posts() {
		return json_encode( $this->get_posts( array(
			'orderby'        => 'date',
			'order'          => 'DESC',
		) ) );
	}

	/**
	 * Get products
	 * @return null|string Post data
	 */
	public function api_products() {
		return json_encode( $this->get_products() );
	}

	/**
	 * Get product
	 * @return null|string Post data
	 */
	public function api_product() {
		return json_encode( $this->get_product( array(
			'post_type'  => 'product',
			'meta_query' => array(
				array(
					'key'     => '_visibility',
					'value'   => array(
						'visible',
						'catalog',
					),
					'compare' => 'IN'
				)
			)
		) ) );
	}

	/**
	 * Get products
	 * @param array $args
	 * @return null|string Post data
	 */
	public function get_posts( $args = array() ) {
		global $wp_query;
		ob_start();

		$wp_query = new WP_Query( $this->get_args( $args ) );

		$posts_per_page = $wp_query->get( 'posts_per_page' );
		$total_posts    = $wp_query->found_posts;

		if ( $wp_query->posts ) {
			$return = array();
			$return['ID']    = $wp_query->posts[0]->ID;
			$return['posttype']    = $wp_query->posts[0]->post_type;
			$return['paged'] = max( 1, $wp_query->get( 'paged' ) );
			$return['total_pages'] = ceil( $total_posts / $posts_per_page );

			if ( ! $wp_query->have_posts() ) {
				echo '<h1>404 - Page Not Found!</h1>';
			}
			get_template_part( 'loop' );
			$return['html'] = ob_get_contents();
		}
		ob_end_clean();

		return $return;
	}

	/**
	 * Get products
	 *
	 * @param array $args
	 *
	 * @return null|string Post data
	 */
	public function get_products( $args = array() ) {
		global $wp_query;

		$args = array_merge(
			array(
				'post_type'  => 'product',
				'meta_query' => array(
					array(
						'key'     => '_visibility',
						'value'   => array(
							'visible',
							'catalog',
						),
						'compare' => 'IN'
					)
				)
			),
			WC()->query->get_catalog_ordering_args(),
			$this->get_args( $args )
		);

		$wp_query = new WP_Query( $args );

		$return = array();

		if ( ! $wp_query->have_posts() ) {
			return null;
		}

		$this->shop_top( $return );

		while ( $wp_query->have_posts() ) {
			$wp_query->the_post();
			global $product, $post;
			$id              = get_the_ID();
			$product         = new WC_Product( $id );
			$sale            = __( 'Sale!', 'woocommerce' );
			$product_json    = array(
				'post_classes' => join( ' ', get_post_class() ),
				'slug'         => $post->post_name,
				'thumbnail'    => get_the_post_thumbnail_url( null, 'shop_thumbnail' ),
				'title'        => get_the_title(),
				'rating'       => $product->get_rating_html(),
				'sale'         => $product->is_on_sale() ? "<span class='onsale'>$sale</span>" : '',
				'delPrice'     => strip_tags( wc_price( $product->get_display_price( $product->get_regular_price() ) ) ),
				'price'        => strip_tags( wc_price( $product->get_display_price() ) ),
				'ID'           => $id,
			);
			$return['products'][] = $product_json;
		}
		wp_reset_postdata();

		return $return;
	}

	/**
	 * Get product
	 *
	 * @param array $args
	 *
	 * @return null|string Post data
	 */
	public function get_product( $args = array() ) {
		$query = new WP_Query( $this->get_args( $args ) );

		$return = array();

		if ( ! $query->have_posts() ) {
			return null;
		}
		unset( $_GET['name'] );

		while ( $query->have_posts() ) {
			$query->the_post();
			global $product, $post;
			$product = wc_get_product( get_the_ID() );
			$sale    = __( 'Sale!', 'woocommerce' );
			$return    = array(
				'post_classes' => join( ' ', get_post_class() ),
				'slug'         => $post->post_name,
				'tabs'         => $this->product_tabs(),
				'related'      => array( 'post__in' => $product->get_related( 3 ) ),
				'upsells'      => array( 'post__in' => $product->get_upsells() ),
				'meta'         => $this->product_meta( $product ),
				'cartForm'     => $this->cart_form( $product ),
				'thumbs'       => $this->product_thumbs( $product ),
				'content'      => apply_filters( 'the_content', get_the_content() ),
				'thumbnail'    => get_the_post_thumbnail_url( null, 'shop_single' ),
				'title'        => get_the_title(),
				'rating'       => $product->get_rating_html(),
				'sale'         => $product->is_on_sale() ? "<span class='onsale'>$sale</span>" : '',
				'delPrice'     => strip_tags( wc_price( $product->get_display_price( $product->get_regular_price() ) ) ),
				'price'        => strip_tags( wc_price( $product->get_display_price() ) ),
				'ID'           => get_the_ID(),
			);
			$return['related'] = $this->get_products( $return['related'] );
			$return['upsells'] = $this->get_products( $return['upsells'] );
			$return['related'] = is_array( $return['related'] ) ? $return['related']['products'] : null;
			$return['upsells'] = is_array( $return['upsells'] ) ? $return['upsells']['products'] : null;
		}
		wp_reset_postdata();

		return $return;
	}

	public function get_args( $args ) {
		$args = wp_parse_args( $args, $_GET );
		$args = wp_parse_args( $args, array(
			'posts_per_page' => 12,
			'post_type'      => 'any',
			'orderby'        => 'menu_order title',
			'order'          => 'ASC',
			'post_status'    => 'publish',
		) );

		if ( ! empty( $args['post__in'] ) ) {
			$args['post__in'] = is_string( $args['post__in'] ) ? explode( ',', $args['post__in'] ) : $args['post__in'];
		}

		return $args;
	}

	public function product_tabs() {
		$tabs = apply_filters( 'woocommerce_product_tabs', array() );

		ob_start();
		if ( ! empty( $tabs ) ) : ?>

			<ul class="tabs wc-tabs">
				<?php foreach ( $tabs as $key => $tab ) : ?>
					<li class="<?php echo esc_attr( $key ); ?>_tab">
						<a href="#tab-<?php echo esc_attr( $key ); ?>"><?php echo apply_filters( 'woocommerce_product_' . $key . '_tab_title', esc_html( $tab['title'] ), $key ); ?></a>
					</li>
				<?php endforeach; ?>
			</ul>
			<?php foreach ( $tabs as $key => $tab ) : ?>
				<div class="panel entry-content wc-tab" id="tab-<?php echo esc_attr( $key ); ?>">
					<?php call_user_func( $tab['callback'], $key, $tab ); ?>
				</div>
			<?php endforeach; ?>
		<?php endif;
		$return = ob_get_contents();
		ob_end_clean();

		return $this->min_html( $return );
	}

	/**
	 * @param WC_Product $product
	 *
	 * @return mixed
	 */
	public function product_meta( $product ) {
		global $post;
		ob_start();
		do_action( 'woocommerce_product_meta_start' );

		$cat_count = sizeof( get_the_terms( $post->ID, 'product_cat' ) );
		$tag_count = sizeof( get_the_terms( $post->ID, 'product_tag' ) );

		if ( wc_product_sku_enabled() && ( $product->get_sku() || $product->is_type( 'variable' ) ) ) {
			?>
			<span class="sku_wrapper">
				<?php _e( 'SKU:', 'woocommerce' ); ?>
				<span class="sku" itemprop="sku">
					<?php echo ( $sku = $product->get_sku() ) ? $sku : __( 'N/A', 'woocommerce' ); ?>
				</span>
			</span>
			<?php
		}

		echo $product->get_categories( ', ', '<span class="posted_in">' . _n( 'Category:', 'Categories:', $cat_count, 'woocommerce' ) . ' ', '</span>' );
		echo $product->get_tags( ', ', '<span class="tagged_as">' . _n( 'Tag:', 'Tags:', $tag_count, 'woocommerce' ) . ' ', '</span>' );

		do_action( 'woocommerce_product_meta_end' );
		$return = ob_get_contents();
		ob_end_clean();

		return $this->min_html( $return );
	}

	/**
	 * @param WC_Product $product
	 *
	 * @return mixed
	 */
	public function cart_form( $product ) {
		ob_start();
		if ( ! has_action( 'woocommerce_simple_add_to_cart', 'woocommerce_simple_add_to_cart' ) ) {
			add_action( 'woocommerce_simple_add_to_cart', 'woocommerce_simple_add_to_cart', 30 );
			add_action( 'woocommerce_grouped_add_to_cart', 'woocommerce_grouped_add_to_cart', 30 );
			add_action( 'woocommerce_variable_add_to_cart', 'woocommerce_variable_add_to_cart', 30 );
			add_action( 'woocommerce_external_add_to_cart', 'woocommerce_external_add_to_cart', 30 );
		}

		do_action( 'woocommerce_' . $product->product_type . '_add_to_cart' );

		$return = ob_get_contents();
		ob_end_clean();

		return $this->min_html( $return );
	}

	/**
	 * @param WC_Product $product
	 *
	 * @return mixed
	 */
	public function product_thumbs( $product ) {
		global $post;

		$attachment_ids = $product->get_gallery_attachment_ids();
		$loop           = 0;

		ob_start();
		if ( $attachment_ids ) {
			foreach ( $attachment_ids as $attachment_id ) {

				$classes = array( 'zoom' );

				$image_link = wp_get_attachment_url( $attachment_id );

				if ( ! $image_link ) {
					continue;
				}

				$image_caption = esc_attr( get_post_field( 'post_excerpt', $attachment_id ) );
				$image         = wp_get_attachment_image( $attachment_id, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ), 0, $attr = array(
					'title' => esc_attr( get_the_title( $attachment_id ) ),
					'alt'   => $image_caption,
				) );

				$image_class = esc_attr( implode( ' ', $classes ) );

				echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" class="%s" title="%s" data-rel="prettyPhoto[product-gallery]">%s</a>', $image_link, $image_class, $image_caption, $image ), $attachment_id, $post->ID, $image_class );

				$loop ++;
			}
		}
		$return = ob_get_contents();
		ob_end_clean();

		return $this->min_html( $return );
	}

	/**
	 * @param array $return
	 */
	public function shop_top( &$return ) {
		global $wp_query;

		if ( 1 === $wp_query->found_posts ) {
			return;
		}

		$return['paged']    = max( 1, $wp_query->get( 'paged' ) );
		$per_page = $wp_query->get( 'posts_per_page' );
		$total    = $wp_query->found_posts;
		$return['total_pages'] = ceil( $total / $per_page );
		$first    = ( $per_page * $return['paged'] ) - $per_page + 1;
		$last     = min( $total, $wp_query->get( 'posts_per_page' ) * $return['paged'] );

		if ( 1 === $total ) {
			$return['result_count'] = __( 'Showing the single result', 'woocommerce' );
		} elseif ( $total <= $per_page || -1 === $per_page ) {
			$return['result_count'] = sprintf( __( 'Showing all %d results', 'woocommerce' ), $total );
		} else {
			$return['result_count'] = sprintf( _x( 'Showing %1$d&ndash;%2$d of %3$d results', '%1$d = first, %2$d = last, %3$d = total', 'woocommerce' ), $first, $last, $total );
		}

	}

	public function min_html( $html ) {
		$html = str_replace( array( "\n", "\t", ), '', $html );

		return $html;
	}
}

Fastshop_Wp_API::instance();