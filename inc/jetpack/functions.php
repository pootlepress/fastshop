<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package fastshop
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function fastshop_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'footer'    => 'page',
	) );
}

/**
 * Enqueue jetpack styles.
 * @since  1.6.1
 */
function fastshop_jetpack_scripts() {
	global $fastshop_version;

	if ( class_exists( 'Jetpack' ) ) {
		wp_enqueue_style( 'fastshop-jetpack-style', FS_URL . '/inc/jetpack/css/jetpack.css', '', $fastshop_version );
		wp_style_add_data( 'fastshop-jetpack-style', 'rtl', 'replace' );
	}
}