<?php
/**
 * fastshop Theme Customizer controls
 *
 * @package fastshop
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer along with several other settings.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 * @since  1.0.0
 */
if ( ! function_exists( 'fastshop_customize_register' ) ) {
	function fastshop_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         	= 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport 	= 'postMessage';

		// Move background color setting alongside background image
		$wp_customize->get_control( 'background_color' )->section 	= 'background_image';
		$wp_customize->get_control( 'background_color' )->priority 	= 20;

		// Change background image section title & priority
		$wp_customize->get_section( 'background_image' )->title 	= __( 'Background', 'fastshop' );
		$wp_customize->get_section( 'background_image' )->priority 	= 30;

		// Change header image section title & priority
		$wp_customize->get_section( 'header_image' )->title 		= __( 'Header', 'fastshop' );
		$wp_customize->get_section( 'header_image' )->priority 		= 35;

		/**
		 * Custom controls
		 */
		require_once dirname( __FILE__ ) . '/controls/radio-image.php';
		require_once dirname( __FILE__ ) . '/controls/arbitrary.php';

		if ( apply_filters( 'fastshop_customizer_more', true ) ) {
			require_once dirname( __FILE__ ) . '/controls/more.php';
		}

		/**
		 * Add the typography section
	     */
		$wp_customize->add_section( 'fastshop_typography' , array(
			'title'      => __( 'Typography', 'fastshop' ),
			'priority'   => 45,
		) );

		/**
		 * Heading color
		 */
		$wp_customize->add_setting( 'fastshop_heading_color', array(
			'default'           => apply_filters( 'fastshop_default_heading_color', '#484c51' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_heading_color', array(
			'label'	   => __( 'Heading color', 'fastshop' ),
			'section'  => 'fastshop_typography',
			'settings' => 'fastshop_heading_color',
			'priority' => 20,
		) ) );

		/**
		 * Text Color
		 */
		$wp_customize->add_setting( 'fastshop_text_color', array(
			'default'           => apply_filters( 'fastshop_default_text_color', '#60646c' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_text_color', array(
			'label'		=> __( 'Text color', 'fastshop' ),
			'section'	=> 'fastshop_typography',
			'settings'	=> 'fastshop_text_color',
			'priority'	=> 30,
		) ) );

		/**
		 * Accent Color
		 */
		$wp_customize->add_setting( 'fastshop_accent_color', array(
			'default'           => apply_filters( 'fastshop_default_accent_color', '#09c' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_accent_color', array(
			'label'	   => __( 'Link / accent color', 'fastshop' ),
			'section'  => 'fastshop_typography',
			'settings' => 'fastshop_accent_color',
			'priority' => 40,
		) ) );

		/**
		 * Logo
		 */
		if ( ! class_exists( 'Jetpack' ) ) {
			$wp_customize->add_control( new Arbitrary_Fastshop_Control( $wp_customize, 'fastshop_logo_heading', array(
				'section'  		=> 'header_image',
				'type' 			=> 'heading',
				'label'			=> __( 'Logo', 'fastshop' ),
				'priority' 		=> 2,
			) ) );

			$wp_customize->add_control( new Arbitrary_Fastshop_Control( $wp_customize, 'fastshop_logo_info', array(
				'section'  		=> 'header_image',
				'type' 			=> 'text',
				'description'	=> sprintf( __( 'Looking to add a logo? Install the %sJetpack%s plugin! %sRead more%s.', 'fastshop' ), '<a href="https://wordpress.org/plugins/jetpack/">', '</a>', '<a href="http://docs.pootlepress.com/document/fastshop-faq/#section-1">', '</a>' ),
				'priority' 		=> 3,
			) ) );

			$wp_customize->add_control( new Arbitrary_Fastshop_Control( $wp_customize, 'fastshop_logo_divider_after', array(
				'section'  		=> 'header_image',
				'type' 			=> 'divider',
				'priority' 		=> 4,
			) ) );
		}

		$wp_customize->add_control( new Arbitrary_Fastshop_Control( $wp_customize, 'fastshop_header_image_heading', array(
			'section'  		=> 'header_image',
			'type' 			=> 'heading',
			'label'			=> __( 'Header background image', 'fastshop' ),
			'priority' 		=> 6,
		) ) );

		/**
		 * Header Background
		 */
		$wp_customize->add_setting( 'fastshop_header_background_color', array(
			'default'           => apply_filters( 'fastshop_default_header_background_color', '#2c2d33' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_header_background_color', array(
			'label'	   => __( 'Background color', 'fastshop' ),
			'section'  => 'header_image',
			'settings' => 'fastshop_header_background_color',
			'priority' => 15,
		) ) );

		/**
		 * Header text color
		 */
		$wp_customize->add_setting( 'fastshop_header_text_color', array(
			'default'           => apply_filters( 'fastshop_default_header_text_color', '#9aa0a7' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_header_text_color', array(
			'label'	   => __( 'Text color', 'fastshop' ),
			'section'  => 'header_image',
			'settings' => 'fastshop_header_text_color',
			'priority' => 20,
		) ) );

		/**
		 * Header link color
		 */
		$wp_customize->add_setting( 'fastshop_header_link_color', array(
			'default'           => apply_filters( 'fastshop_default_header_link_color', '#ffffff' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_header_link_color', array(
			'label'	   => __( 'Link color', 'fastshop' ),
			'section'  => 'header_image',
			'settings' => 'fastshop_header_link_color',
			'priority' => 30,
		) ) );

		/**
		 * Footer section
		 */
		$wp_customize->add_section( 'fastshop_footer' , array(
			'title'      	=> __( 'Footer', 'fastshop' ),
			'priority'   	=> 40,
			'description' 	=> __( 'Customise the look & feel of your web site footer.', 'fastshop' ),
		) );

		/**
		 * Footer Background
		 */
		$wp_customize->add_setting( 'fastshop_footer_background_color', array(
			'default'           => apply_filters( 'fastshop_default_footer_background_color', '#f3f3f3' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_footer_background_color', array(
			'label'	   	=> __( 'Background color', 'fastshop' ),
			'section'  	=> 'fastshop_footer',
			'settings' 	=> 'fastshop_footer_background_color',
			'priority'	=> 10,
		) ) );

		/**
		 * Footer heading color
		 */
		$wp_customize->add_setting( 'fastshop_footer_heading_color', array(
			'default'           => apply_filters( 'fastshop_default_footer_heading_color', '#494c50' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport' 		=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_footer_heading_color', array(
			'label'	   	=> __( 'Heading color', 'fastshop' ),
			'section'  	=> 'fastshop_footer',
			'settings' 	=> 'fastshop_footer_heading_color',
			'priority'	=> 20,
		) ) );

		/**
		 * Footer text color
		 */
		$wp_customize->add_setting( 'fastshop_footer_text_color', array(
			'default'           => apply_filters( 'fastshop_default_footer_text_color', '#61656b' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_footer_text_color', array(
			'label'	   	=> __( 'Text color', 'fastshop' ),
			'section'  	=> 'fastshop_footer',
			'settings' 	=> 'fastshop_footer_text_color',
			'priority'	=> 30,
		) ) );

		/**
		 * Footer link color
		 */
		$wp_customize->add_setting( 'fastshop_footer_link_color', array(
			'default'           => apply_filters( 'fastshop_default_footer_link_color', '#09c' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_footer_link_color', array(
			'label'	   	=> __( 'Link color', 'fastshop' ),
			'section'  	=> 'fastshop_footer',
			'settings' 	=> 'fastshop_footer_link_color',
			'priority'	=> 40,
		) ) );


		/**
		 * Buttons section
		 */
		$wp_customize->add_section( 'fastshop_buttons' , array(
			'title'      	=> __( 'Buttons', 'fastshop' ),
			'priority'   	=> 45,
			'description' 	=> __( 'Customise the look & feel of your web site buttons.', 'fastshop' ),
		) );

		/**
		 * Button background color
		 */
		$wp_customize->add_setting( 'fastshop_button_background_color', array(
			'default'           => apply_filters( 'fastshop_default_button_background_color', '#60646c' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_button_background_color', array(
			'label'	   => __( 'Background color', 'fastshop' ),
			'section'  => 'fastshop_buttons',
			'settings' => 'fastshop_button_background_color',
			'priority' => 10,
		) ) );

		/**
		 * Button text color
		 */
		$wp_customize->add_setting( 'fastshop_button_text_color', array(
			'default'           => apply_filters( 'fastshop_default_button_text_color', '#ffffff' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_button_text_color', array(
			'label'	   => __( 'Text color', 'fastshop' ),
			'section'  => 'fastshop_buttons',
			'settings' => 'fastshop_button_text_color',
			'priority' => 20,
		) ) );

		/**
		 * Button alt background color
		 */
		$wp_customize->add_setting( 'fastshop_button_alt_background_color', array(
			'default'           => apply_filters( 'fastshop_default_button_alt_background_color', '#09c' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_button_alt_background_color', array(
			'label'	   => __( 'Alternate button background color', 'fastshop' ),
			'section'  => 'fastshop_buttons',
			'settings' => 'fastshop_button_alt_background_color',
			'priority' => 30,
		) ) );

		/**
		 * Button alt text color
		 */
		$wp_customize->add_setting( 'fastshop_button_alt_text_color', array(
			'default'           => apply_filters( 'fastshop_default_button_alt_text_color', '#ffffff' ),
			'sanitize_callback' => 'fastshop_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'fastshop_button_alt_text_color', array(
			'label'	   => __( 'Alternate button text color', 'fastshop' ),
			'section'  => 'fastshop_buttons',
			'settings' => 'fastshop_button_alt_text_color',
			'priority' => 40,
		) ) );

		/**
		 * Layout
		 */
		$wp_customize->add_section( 'fastshop_layout' , array(
			'title'      	=> __( 'Layout', 'fastshop' ),
			'priority'   	=> 50,
		) );

		$wp_customize->add_setting( 'fastshop_layout', array(
			'default'    		=> apply_filters( 'fastshop_default_layout', $layout = is_rtl() ? 'left' : 'right' ),
			'sanitize_callback' => 'fastshop_sanitize_layout',
		) );

		$wp_customize->add_control( new Fastshop_Custom_Radio_Image_Control( $wp_customize, 'fastshop_layout', array(
					'settings'		=> 'fastshop_layout',
					'section'		=> 'fastshop_layout',
					'label'			=> __( 'General Layout', 'fastshop' ),
					'priority'		=> 1,
					'choices'		=> array(
						'right' 		=> FS_URL . '/inc/customizer/controls/img/2cr.png',
						'left' 			=> FS_URL . '/inc/customizer/controls/img/2cl.png',
					)
		) ) );

		/**
		 * More
		 */
		if ( apply_filters( 'fastshop_customizer_more', true ) ) {
			$wp_customize->add_section( 'fastshop_more' , array(
				'title'      	=> __( 'More', 'fastshop' ),
				'priority'   	=> 999,
			) );

			$wp_customize->add_setting( 'fastshop_more', array(
				'default'    		=> null,
				'sanitize_callback' => 'sanitize_text_field',
			) );

			$wp_customize->add_control( new More_Fastshop_Control( $wp_customize, 'fastshop_more', array(
				'label'    => __( 'Looking for more options?', 'fastshop' ),
				'section'  => 'fastshop_more',
				'settings' => 'fastshop_more',
				'priority' => 1,
			) ) );
		}
	}
}