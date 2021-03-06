<?php
/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */

if ( ! function_exists( 'fastshop_product_categories' ) ) {
	/**
	 * Display Product Categories
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return void
	 */
	function fastshop_product_categories( $args ) {

		if ( is_woocommerce_activated() ) {

			$args = apply_filters( 'fastshop_product_categories_args', array(
				'limit' 			=> 3,
				'columns' 			=> 3,
				'child_categories' 	=> 0,
				'orderby' 			=> 'name',
				'title'				=> __( 'Product Categories', 'fastshop' ),
			) );

			echo '<section class="fastshop-product-section fastshop-product-categories">';

			do_action( 'fastshop_homepage_before_product_categories' );

			echo '<h2 class="section-title">' . wp_kses_post( $args['title'] ) . '</h2>';

			do_action( 'fastshop_homepage_after_product_categories_title' );

			echo fastshop_do_shortcode( 'product_categories',
				array(
					'number' 	=> intval( $args['limit'] ),
					'columns'	=> intval( $args['columns'] ),
					'orderby'	=> esc_attr( $args['orderby'] ),
					'parent'	=> esc_attr( $args['child_categories'] ),
				) );

			do_action( 'fastshop_homepage_after_product_categories' );

			echo '</section>';

		}
	}
}

if ( ! function_exists( 'fastshop_recent_products' ) ) {
	/**
	 * Display Recent Products
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return void
	 */
	function fastshop_recent_products( $args ) {

		if ( is_woocommerce_activated() ) {

			$args = apply_filters( 'fastshop_recent_products_args', array(
				'limit' 			=> 4,
				'columns' 			=> 4,
				'title'				=> __( 'Recent Products', 'fastshop' ),
			) );

			echo '<section class="fastshop-product-section fastshop-recent-products">';

			do_action( 'fastshop_homepage_before_recent_products' );

			echo '<h2 class="section-title">' . wp_kses_post( $args['title'] ) . '</h2>';

			do_action( 'fastshop_homepage_after_recent_products_title' );

			echo fastshop_do_shortcode( 'recent_products',
				array(
					'per_page' 	=> intval( $args['limit'] ),
					'columns'	=> intval( $args['columns'] ),
				) );

			do_action( 'fastshop_homepage_after_recent_products' );

			echo '</section>';
		}
	}
}

if ( ! function_exists( 'fastshop_featured_products' ) ) {
	/**
	 * Display Featured Products
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return void
	 */
	function fastshop_featured_products( $args ) {

		if ( is_woocommerce_activated() ) {

			$args = apply_filters( 'fastshop_featured_products_args', array(
				'limit' 			=> 4,
				'columns' 			=> 4,
				'orderby'			=> 'date',
				'order'				=> 'desc',
				'title'				=> __( 'Featured Products', 'fastshop' ),
			) );

			echo '<section class="fastshop-product-section fastshop-featured-products">';

			do_action( 'fastshop_homepage_before_featured_products' );

			echo '<h2 class="section-title">' . wp_kses_post( $args['title'] ) . '</h2>';

			do_action( 'fastshop_homepage_after_featured_products_title' );

			echo fastshop_do_shortcode( 'featured_products',
				array(
					'per_page' 	=> intval( $args['limit'] ),
					'columns'	=> intval( $args['columns'] ),
					'orderby'	=> esc_attr( $args['orderby'] ),
					'order'		=> esc_attr( $args['order'] ),
				) );

			do_action( 'fastshop_homepage_after_featured_products' );

			echo '</section>';

		}
	}
}

if ( ! function_exists( 'fastshop_popular_products' ) ) {
	/**
	 * Display Popular Products
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return void
	 */
	function fastshop_popular_products( $args ) {

		if ( is_woocommerce_activated() ) {

			$args = apply_filters( 'fastshop_popular_products_args', array(
				'limit' 			=> 4,
				'columns' 			=> 4,
				'title'				=> __( 'Top Rated Products', 'fastshop' ),
			) );

			echo '<section class="fastshop-product-section fastshop-popular-products">';

			do_action( 'fastshop_homepage_before_popular_products' );

			echo '<h2 class="section-title">' . wp_kses_post( $args['title'] ) . '</h2>';

			do_action( 'fastshop_homepage_after_popular_products_title' );

			echo fastshop_do_shortcode( 'top_rated_products',
				array(
					'per_page' 	=> intval( $args['limit'] ),
					'columns'	=> intval( $args['columns'] ),
				) );

			do_action( 'fastshop_homepage_after_popular_products' );

			echo '</section>';

		}
	}
}

if ( ! function_exists( 'fastshop_on_sale_products' ) ) {
	/**
	 * Display On Sale Products
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return void
	 */
	function fastshop_on_sale_products( $args ) {

		if ( is_woocommerce_activated() ) {

			$args = apply_filters( 'fastshop_on_sale_products_args', array(
				'limit' 			=> 4,
				'columns' 			=> 4,
				'title'				=> __( 'On Sale', 'fastshop' ),
			) );

			echo '<section class="fastshop-product-section fastshop-on-sale-products">';

			do_action( 'fastshop_homepage_before_on_sale_products' );

			echo '<h2 class="section-title">' . wp_kses_post( $args['title'] ) . '</h2>';

			do_action( 'fastshop_homepage_after_on_sale_products_title' );

			echo fastshop_do_shortcode( 'sale_products',
				array(
					'per_page' 	=> intval( $args['limit'] ),
					'columns'	=> intval( $args['columns'] ),
				) );

			do_action( 'fastshop_homepage_after_on_sale_products' );

			echo '</section>';

		}
	}
}

if ( ! function_exists( 'fastshop_homepage_content' ) ) {
	/**
	 * Display homepage content
	 * Hooked into the `homepage` action in the homepage template
	 * @since  1.0.0
	 * @return  void
	 */
	function fastshop_homepage_content() {
		while ( have_posts() ) : the_post();

			get_template_part( 'content', 'page' );

		endwhile; // end of the loop.
	}
}

if ( ! function_exists( 'fastshop_social_icons' ) ) {
	/**
	 * Display social icons
	 * If the subscribe and connect plugin is active, display the icons.
	 * @link http://wordpress.org/plugins/subscribe-and-connect/
	 * @since 1.0.0
	 */
	function fastshop_social_icons() {
		if ( class_exists( 'Subscribe_And_Connect' ) ) {
			echo '<div class="subscribe-and-connect-connect">';
			subscribe_and_connect_connect();
			echo '</div>';
		}
	}
}

if ( ! function_exists( 'fastshop_get_sidebar' ) ) {
	/**
	 * Display fastshop sidebar
	 * @uses get_sidebar()
	 * @since 1.0.0
	 */
	function fastshop_get_sidebar() {
		get_sidebar();
	}
}

if ( ! function_exists( 'fastshop_post_thumbnail' ) ) {
	/**
	 * Display post thumbnail
	 * @var $size thumbnail size. thumbnail|medium|large|full|$custom
	 * @uses has_post_thumbnail()
	 * @uses the_post_thumbnail
	 * @param string $size
	 * @since 1.5.0
	 */
	function fastshop_post_thumbnail( $size ) {
		if ( has_post_thumbnail() ) {
			the_post_thumbnail( $size, array( 'itemprop' => 'image' ) );
		}
	}
}

if ( ! function_exists( 'fastshop_posted_on' ) ) {
	/**
	 * Prints HTML with meta information for the current post-date/time and author.
	 */
	function fastshop_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s" itemprop="datePublished">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s" itemprop="datePublished">%4$s</time>';
		}
		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( 'c' ) ),
			esc_html( get_the_modified_date() )
		);
		$posted_on = sprintf(
			_x( 'Posted on %s', 'post date', 'fastshop' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);
		$byline = sprintf(
			_x( 'by %s', 'post author', 'fastshop' ),
			'<span class="vcard author"><span class="fn" itemprop="author"><a class="url fn n" rel="author" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span></span>'
		);
		echo apply_filters( 'fastshop_single_post_posted_on_html', "<div class='posted-on-by'><span class='posted-on'>$posted_on</span> <span class='byline'>$byline</span></div>", $posted_on, $byline );
	}
}