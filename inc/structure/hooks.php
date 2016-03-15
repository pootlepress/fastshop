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
add_action( 'after_setup_theme',			'fastshop_setup' );
add_action( 'widgets_init',					'fastshop_widgets_init' );
add_action( 'wp_enqueue_scripts',			'fastshop_scripts',				250 );
add_action( 'wp_head',						'fastshop_system_init',			250 );
add_action( 'wp_enqueue_scripts',			'fastshop_child_scripts',		30 ); // After WooCommerce
add_action( 'fastshop_before_content',	'fastshop_header_widget_region',	10 );
add_action( 'fastshop_sidebar',			'fastshop_get_sidebar',				10 );

/**
 * Header
 * @see  fastshop_skip_links()
 * @see  fastshop_secondary_navigation()
 * @see  fastshop_site_branding()
 * @see  fastshop_primary_navigation()
 */
add_action( 'fastshop_header', 'fastshop_skip_links', 				0 );
add_action( 'fastshop_header', 'fastshop_site_branding',			20 );
add_action( 'fastshop_header', 'fastshop_secondary_navigation',		30 );
add_action( 'fastshop_header', 'fastshop_primary_navigation',		50 );

/**
 * Footer
 * @see  fastshop_footer_widgets()
 * @see  fastshop_credit()
 */
add_action( 'fastshop_footer', 'fastshop_footer_widgets',	10 );
add_action( 'fastshop_footer', 'fastshop_credit',			20 );

/**
 * Homepage
 * @see  fastshop_homepage_content()
 * @see  fastshop_product_categories()
 * @see  fastshop_recent_products()
 * @see  fastshop_featured_products()
 * @see  fastshop_popular_products()
 * @see  fastshop_on_sale_products()
 */
add_action( 'homepage', 'fastshop_homepage_content',		10 );
add_action( 'homepage', 'fastshop_product_categories',	20 );
add_action( 'homepage', 'fastshop_recent_products',		30 );
add_action( 'homepage', 'fastshop_featured_products',		40 );
add_action( 'homepage', 'fastshop_popular_products',		50 );
add_action( 'homepage', 'fastshop_on_sale_products',		60 );

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
add_action( 'fastshop_loop_post',			'fastshop_post_meta',			20 );
add_action( 'fastshop_loop_post',			'fastshop_post_content',		30 );
add_action( 'fastshop_loop_after',		'fastshop_paging_nav',		10 );
add_action( 'fastshop_single_post',		'fastshop_post_header',		10 );
add_action( 'fastshop_single_post',		'fastshop_post_meta',			20 );
add_action( 'fastshop_single_post',		'fastshop_post_content',		30 );
add_action( 'fastshop_single_post_after',	'fastshop_post_nav',			10 );
add_action( 'fastshop_single_post_after',	'fastshop_display_comments',	20 );

/**
 * Pages
 * @see  fastshop_page_header()
 * @see  fastshop_page_content()
 * @see  fastshop_display_comments()
 */
add_action( 'fastshop_page', 			'fastshop_page_header',		10 );
add_action( 'fastshop_page', 			'fastshop_page_content',		20 );
add_action( 'fastshop_page_after', 	'fastshop_display_comments',	10 );

/**
 * Extras
 * @see  fastshop_setup_author()
 * @see  fastshop_body_classes()
 * @see  fastshop_page_menu_args()
 */
add_filter( 'body_class',			'fastshop_body_classes' );
add_filter( 'wp_page_menu_args',	'fastshop_page_menu_args' );