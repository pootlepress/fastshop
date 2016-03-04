<?php
/**
 * fastshop customizer hooks
 *
 * @package fastshop
 */

add_action( 'customize_preview_init', 			'fastshop_customize_preview_js' );
add_action( 'customize_register', 				'fastshop_customize_register' );
add_filter( 'body_class', 						'fastshop_layout_class' );
add_action( 'wp_enqueue_scripts', 				'fastshop_add_customizer_css', 130 );
add_action( 'after_setup_theme', 				'fastshop_custom_header_setup' );
add_action( 'customize_controls_print_styles', 	'fastshop_customizer_custom_control_css' );