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
require dirname( __FILE__ ) . '/functions/setup.php';			// Enqueue styles, register widget regions, etc.
require dirname( __FILE__ ) . '/functions/extras.php';			// Extra custom functionality
require dirname( __FILE__ ) . '/functions/wp-api.php';			// WordPress API Endpoints
require dirname( __FILE__ ) . '/functions/template-tags.php';	// Template tags

/**
 * Customizer additions.
 */
require dirname( __FILE__ ) . '/customizer/hooks.php';
require dirname( __FILE__ ) . '/customizer/controls.php';
require dirname( __FILE__ ) . '/customizer/display.php';
require dirname( __FILE__ ) . '/customizer/functions.php';
require dirname( __FILE__ ) . '/customizer/custom-header.php';

/**
 * Structure.
 * Template functions used throughout the theme.
 */
require dirname( __FILE__ ) . '/structure/hooks.php';
require dirname( __FILE__ ) . '/structure/comments.php';

/**
 * Load WooCommerce compatibility files.
 */
if ( is_woocommerce_activated() ) {
	require dirname( __FILE__ ) . '/woocommerce/hooks.php';
	require dirname( __FILE__ ) . '/woocommerce/functions.php';
	require dirname( __FILE__ ) . '/woocommerce/template-tags.php';
	require dirname( __FILE__ ) . '/woocommerce/integrations.php';
}