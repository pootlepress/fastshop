<?php
/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
add_action( 'rest_api_init', 'fastshop_api_init' );

function fastshop_api_init() {
	register_rest_route( 'fastshop/v1', '/products', array(
		'methods'  => 'GET',
		'callback' => 'fastshop_api_products',
	) );
}

/**
 * Grab latest post title by an author!
 * @return string|null Post title for the latest,  * or null if none.
 */
function fastshop_api_products() {
	$args = wp_parse_args( $_GET, array(
		'posts_per_page' => 12,
		'orderby'        => 'date',
		'order'          => 'DESC',
	) );

	$args['post_status'] = 'publish';
	$args['post_type']   = 'product';

	$query  = new WP_Query( $args );
	$products_json = array();


	if ( ! $query->have_posts() ) {
		return null;
	}

	while ( $query->have_posts() ) {
		$query->the_post();
		$product = new WC_Product( get_the_ID() );
		$sale = __( 'Sale!', 'woocommerce' );
		$product_json = array(
			'post_classes'	=> join( ' ', get_post_class() ),
			'permalink'		=> get_the_permalink(),
			'thumbnail'		=> get_the_post_thumbnail_url( null, 'shop_thumbnail' ),
			'title'			=> get_the_title(),
			'rating'		=> $product->get_rating_html(),
			'sale'			=> $product->is_on_sale() ? "<span class='onsale'>$sale</span>" : '',
			'delPrice'		=> $product->get_regular_price(),
			'price'			=> $product->get_price(),
			'ID'			=> get_the_ID(),
		);
		$products_json[] = $product_json;
	}
	wp_reset_postdata();

	return json_encode( $products_json );
}

function fastshop_product_rating() {
		global $wpdb;

		// No meta date? Do the calculation
		if ( ! metadata_exists( 'post', $this->id, '_wc_average_rating' ) ) {
			if ( $count = $this->get_rating_count() ) {
				$ratings = $wpdb->get_var( $wpdb->prepare(
					"SELECT SUM(meta_value) FROM $wpdb->commentmeta" .
					"LEFT JOIN $wpdb->comments ON $wpdb->commentmeta.comment_id = $wpdb->comments.comment_ID" .
					"WHERE meta_key = 'rating'" .
					"AND comment_post_ID = %d" .
					"AND comment_approved = '1'" .
					"AND meta_value > 0",
					$this->id ) );
				$average = number_format( $ratings / $count, 2, '.', '' );
			} else {
				$average = 0;
			}
			update_post_meta( $this->id, '_wc_average_rating', $average );
		} else {
			$average = get_post_meta( $this->id, '_wc_average_rating', true );
		}

		return (string) floatval( $average );
	}