<?php
/**
 * fastshop hooks
 *
 * @package fastshop
 */

/**
 * General
 * @see  fastshop_setup()
 * @see  fastshop_widgets_init()
 * @see  fastshop_scripts()
 * @see  fastshop_header_widget_region()
 * @see  fastshop_get_sidebar()
 */
add_action( 'after_setup_theme',	'fastshop_setup' );
add_action( 'widgets_init',			'fastshop_widgets_init' );
add_action( 'wp_enqueue_scripts',	'fastshop_scripts',				250 );
add_action( 'wp_head',				'fastshop_system_init',			250 );
add_action( 'wp_enqueue_scripts',	'fastshop_child_scripts',		30 ); // After WooCommerce
add_action( 'fastshop_sidebar',		'fastshop_get_sidebar',			10 );

/**
 * Posts
 * @see  fastshop_post_header()
 * @see  fastshop_post_meta()
 * @see  fastshop_post_content()
 * @see  fastshop_paging_nav()
 * @see  fastshop_single_post_header()
 * @see  fastshop_post_nav()
 * @see  fastshop_display_comments()
 */
add_action( 'fastshop_loop_post',			'fastshop_post_header',		10 );
add_action( 'fastshop_loop_post',			'fastshop_post_meta',		20 );
add_action( 'fastshop_loop_post',			'fastshop_post_content',	30 );
add_action( 'fastshop_loop_after',			'fastshop_paging_nav',		10 );

/**
 * Extras
 * @see  fastshop_setup_author()
 * @see  fastshop_body_classes()
 * @see  fastshop_page_menu_args()
 */
add_filter( 'body_class',			'fastshop_body_classes' );
add_filter( 'wp_page_menu_args',	'fastshop_page_menu_args' );