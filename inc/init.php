<?php
/**
 * fastshop engine room
 *
 * @package fastshop
 */

/**
 * Setup.
 * Enqueue styles, register widget regions, etc.
 */
require dirname( __FILE__ ) . '/functions/setup.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require dirname( __FILE__ ) . '/functions/extras.php';

/**
 * API endpoints
 * Enqueue styles, register widget regions, etc.
 */
require dirname( __FILE__ ) . '/functions/wp-api.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/hooks.php';
require get_template_directory() . '/inc/customizer/controls.php';
require get_template_directory() . '/inc/customizer/display.php';
require get_template_directory() . '/inc/customizer/functions.php';
require get_template_directory() . '/inc/customizer/custom-header.php';

/**
 * Structure.
 * Template functions used throughout the theme.
 */
require dirname( __FILE__ ) . '/structure/hooks.php';
require dirname( __FILE__ ) . '/structure/post.php';
require dirname( __FILE__ ) . '/structure/header.php';
require dirname( __FILE__ ) . '/structure/footer.php';
require dirname( __FILE__ ) . '/structure/comments.php';
require dirname( __FILE__ ) . '/structure/template-tags.php';

/**
 * Load WooCommerce compatibility files.
 */
if ( is_woocommerce_activated() ) {
	require dirname( __FILE__ ) . '/woocommerce/hooks.php';
	require dirname( __FILE__ ) . '/woocommerce/functions.php';
	require dirname( __FILE__ ) . '/woocommerce/template-tags.php';
	require dirname( __FILE__ ) . '/woocommerce/integrations.php';
}