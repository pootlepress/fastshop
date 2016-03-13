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
	register_rest_route( 'fastshop/v1', '/product', array(
		'methods'  => 'GET',
		'callback' => 'fastshop_api_product',
	) );
}

/**
 * Get products
 * @return string|null Post data
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
		global $post;
		$product = new WC_Product( get_the_ID() );
		$sale = __( 'Sale!', 'woocommerce' );
		$product_json = array(
			'post_classes'	=> join( ' ', get_post_class() ),
			'slug'			=> $post->post_name,
			'thumbnail'		=> get_the_post_thumbnail_url( null, 'shop_thumbnail' ),
			'title'			=> get_the_title(),
			'rating'		=> $product->get_rating_html(),
			'sale'			=> $product->is_on_sale() ? "<span class='onsale'>$sale</span>" : '',
			'delPrice'		=> strip_tags( wc_price( $product->get_display_price( $product->get_regular_price() ) ) ),
			'price'			=> strip_tags( wc_price( $product->get_display_price() ) ),
			'ID'			=> get_the_ID(),
		);
		$products_json[] = $product_json;
	}
	wp_reset_postdata();

	return json_encode( $products_json );
}

/**
 * Get product
 * @return string|null Post data
 */
function fastshop_api_product() {
	$args = wp_parse_args( $_GET, array(
		'posts_per_page' => 12,
		'orderby'        => 'date',
		'order'          => 'DESC',
	) );

	$args['post_status'] = 'publish';
	$args['post_type']   = 'product';

	$query  = new WP_Query( $args );
	$product_json = array();


	if ( ! $query->have_posts() ) {
		return null;
	}

	while ( $query->have_posts() ) {
		$query->the_post();
		global $post;
		$product = new WC_Product( get_the_ID() );
		$sale = __( 'Sale!', 'woocommerce' );
		$product_json = array(
			'post_classes'	=> join( ' ', get_post_class() ),
			'slug'			=> $post->post_name,
			'thumbnail'		=> get_the_post_thumbnail_url( null, 'shop_single' ),
			'title'			=> get_the_title(),
			'rating'		=> $product->get_rating_html(),
			'sale'			=> $product->is_on_sale() ? "<span class='onsale'>$sale</span>" : '',
			'delPrice'		=> strip_tags( wc_price( $product->get_display_price( $product->get_regular_price() ) ) ),
			'price'			=> strip_tags( wc_price( $product->get_display_price() ) ),
			'ID'			=> get_the_ID(),
		);
	}
	wp_reset_postdata();

	return json_encode( $product_json );
}
