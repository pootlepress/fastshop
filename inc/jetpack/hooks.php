<?php
/**
 * fastshop WooCommerce hooks
 *
 * @package fastshop
 */

add_action( 'after_setup_theme', 	'fastshop_jetpack_setup' );
add_action( 'wp_enqueue_scripts',	'fastshop_jetpack_scripts', 10 );