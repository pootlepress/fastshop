<?php
/**
 * Integration logic for WooCommerce extensions
 *
 * @package fastshop
 */

/**
 * Styles & Scripts
 * @return void
 */
function fastshop_woocommerce_integrations_scripts() {
	/**
	 * Bookings
	 */
	if ( is_woocommerce_extension_activated( 'WC_Bookings' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-bookings-style', FS_URL . '/inc/woocommerce/css/bookings.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-bookings-style', 'rtl', 'replace' );
	}

	/**
	 * Brands
	 */
	if ( is_woocommerce_extension_activated( 'WC_Brands' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-brands-style', FS_URL . '/inc/woocommerce/css/brands.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-brands-style', 'rtl', 'replace' );
	}

	/**
	 * Wishlists
	 */
	if ( is_woocommerce_extension_activated( 'WC_Wishlists_Wishlist' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-wishlists-style', FS_URL . '/inc/woocommerce/css/wishlists.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-wishlists-style', 'rtl', 'replace' );
	}

	/**
	 * AJAX Layered Nav
	 */
	if ( is_woocommerce_extension_activated( 'SOD_Widget_Ajax_Layered_Nav' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-ajax-layered-nav-style', FS_URL . '/inc/woocommerce/css/ajax-layered-nav.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-ajax-layered-nav-style', 'rtl', 'replace' );
	}

	/**
	 * Variation Swatches
	 */
	if ( is_woocommerce_extension_activated( 'WC_SwatchesPlugin' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-variation-swatches-style', FS_URL . '/inc/woocommerce/css/variation-swatches.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-variation-swatches-style', 'rtl', 'replace' );
	}

	/**
	 * Composite Products
	 */
	if ( is_woocommerce_extension_activated( 'WC_Composite_Products' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-composite-products-style', FS_URL . '/inc/woocommerce/css/composite-products.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-composite-products-style', 'rtl', 'replace' );
	}

	/**
	 * WooCommerce Photography
	 */
	if ( is_woocommerce_extension_activated( 'WC_Photography' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-photography-style', FS_URL . '/inc/woocommerce/css/photography.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-photography-style', 'rtl', 'replace' );
	}

	/**
	 * Product Reviews Pro
	 */
	if ( is_woocommerce_extension_activated( 'WC_Product_Reviews_Pro' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-product-reviews-pro-style', FS_URL . '/inc/woocommerce/css/product-reviews-pro.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-product-reviews-pro-style', 'rtl', 'replace' );
	}

	/**
	 * WooCommerce Smart Coupons
	 */
	if ( is_woocommerce_extension_activated( 'WC_Smart_Coupons' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-smart-coupons-style', FS_URL . '/inc/woocommerce/css/smart-coupons.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-smart-coupons-style', 'rtl', 'replace' );
	}

	/**
	 * WooCommerce Deposits
	 */
	if ( is_woocommerce_extension_activated( 'WC_Deposits' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-deposits-style', FS_URL . '/inc/woocommerce/css/deposits.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-deposits-style', 'rtl', 'replace' );
	}

	/**
	 * WooCommerce Product Bundles
	 */
	if ( is_woocommerce_extension_activated( 'WC_Bundles' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-bundles-style', FS_URL . '/inc/woocommerce/css/bundles.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-bundles-style', 'rtl', 'replace' );
	}

	/**
	 * WooCommerce Multiple Shipping Addresses
	 */
	if ( is_woocommerce_extension_activated( 'WC_Ship_Multiple' ) ) {
		wp_enqueue_style( 'fastshop-woocommerce-sma-style', FS_URL . '/inc/woocommerce/css/ship-multiple-addresses.css', 'fastshop-woocommerce-style' );
		wp_style_add_data( 'fastshop-woocommerce-sma-style', 'rtl', 'replace' );
	}
}

/**
 * Add CSS in <head> for integration styles handled by the theme customizer
 *
 * @since 1.0
 */
if ( ! function_exists( 'fastshop_add_integrations_customizer_css' ) ) {
	function fastshop_add_integrations_customizer_css() {

		if ( is_fastshop_customizer_enabled() ) {
			$accent_color 					= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_accent_color', apply_filters( 'fastshop_default_accent_color', '#96588a' ) ) );
			$header_text_color 				= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_header_text_color', apply_filters( 'fastshop_default_header_text_color', '#9aa0a7' ) ) );
			$header_background_color 		= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_header_background_color', apply_filters( 'fastshop_default_header_background_color', '#2c2d33' ) ) );
			$text_color 					= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_text_color', apply_filters( 'fastshop_default_text_color', '#60646c' ) ) );
			$button_background_color 		= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_button_background_color', apply_filters( 'fastshop_default_button_background_color', '#60646c' ) ) );
			$button_text_color 				= fastshop_sanitize_hex_color( get_theme_mod( 'fastshop_button_text_color', apply_filters( 'fastshop_default_button_text_color', '#ffffff' ) ) );

			$woocommerce_style 				= '';

			if ( is_woocommerce_extension_activated( 'WC_Bookings' ) ) {
				$woocommerce_style 					.= '
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.bookable a,
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.bookable a:hover,
				#wc-bookings-booking-form .block-picker li a:hover,
				#wc-bookings-booking-form .block-picker li a.selected {
					background-color: ' . $accent_color . ' !important;
				}

				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.ui-state-disabled .ui-state-default,
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker th {
					color:' . $text_color . ';
				}

				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker-header {
					background-color: ' . $header_background_color . ';
					color: ' . $header_text_color . ';
				}';
			}

			if ( is_woocommerce_extension_activated( 'WC_Product_Reviews_Pro' ) ) {
				$woocommerce_style 					.= '
				.woocommerce #reviews .product-rating .product-rating-details table td.rating-graph .bar,
				.woocommerce-page #reviews .product-rating .product-rating-details table td.rating-graph .bar {
					background-color: ' . $text_color . ' !important;
				}

				.woocommerce #reviews .contribution-actions .feedback,
				.woocommerce-page #reviews .contribution-actions .feedback,
				.star-rating-selector:not(:checked) label.checkbox {
					color: ' . $text_color . ';
				}

				.woocommerce #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce-page #reviews #comments ol.commentlist li .contribution-actions a,
				.star-rating-selector:not(:checked) input:checked ~ label.checkbox,
				.star-rating-selector:not(:checked) label.checkbox:hover ~ label.checkbox,
				.star-rating-selector:not(:checked) label.checkbox:hover,
				.woocommerce #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce-page #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce #reviews .form-contribution .attachment-type:not(:checked) label.checkbox:before,
				.woocommerce-page #reviews .form-contribution .attachment-type:not(:checked) label.checkbox:before {
					color: ' . $accent_color . ' !important;
				}';
			}

			if ( is_woocommerce_extension_activated( 'WC_Smart_Coupons' ) ) {
				$woocommerce_style 					.= '
				.coupon-container {
					background-color: ' . $button_background_color . ' !important;
				}

				.coupon-content {
					border-color: ' . $button_text_color . ' !important;
					color: ' . $button_text_color . ';
				}

				.sd-buttons-transparent.woocommerce .coupon-content,
				.sd-buttons-transparent.woocommerce-page .coupon-content {
					border-color: ' . $button_background_color . ' !important;
				}';
			}

			wp_add_inline_style( 'fastshop-style', $woocommerce_style );

		}
	}
}
