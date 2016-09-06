<?php
/**
 * fastshop setup functions
 *
 * @package fastshop
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 980; /* pixels */
}

/**
 * Assign the Fast shop version to a var
 */
$theme = wp_get_theme( 'fastshop' );
$fastshop_version = $theme['Version'];

if ( ! function_exists( 'fastshop_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function fastshop_setup() {

		/*
		 * Localisation files.
		 * Note: the first-loaded translation file overrides any following ones if the same translation is present.
		 */
		load_theme_textdomain( 'fastshop', WP_LANG_DIR . '/themes' );
		load_theme_textdomain( 'fastshop', get_stylesheet_directory() . '/languages' );
		load_theme_textdomain( 'fastshop', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' ); // Posts and comments RSS feed links in head
		add_theme_support( 'post-thumbnails' ); // Post Thumbnails

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array( 'primary' => __( 'Primary Menu', 'fastshop' ) ) );

		/*
		 * Switch default core markup for search form, comment form, comments, galleries, captions and widgets
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'widgets',
		) );

		// Setup the WordPress core custom background feature.
		add_theme_support( 'custom-background', array(
			'default-color' => apply_filters( 'fastshop_default_background_color', 'fcfcfc' ),
		) );

		add_theme_support( 'woocommerce' );// Declare WooCommerce support
		add_theme_support( 'title-tag' );// Declare support for title theme feature
	}
endif; // fastshop_setup

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function fastshop_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'fastshop' ),
		'id'            => 'sidebar',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
/**
 * Enqueue scripts and styles.
 * @since  1.0.0
 */
function fastshop_scripts() {
	global $fastshop_version;

	wp_enqueue_style( 'fastshop-style', FS_URL . '/style.css', '', $fastshop_version );

	wp_style_add_data( 'fastshop-style', 'rtl', 'replace' );

	wp_enqueue_script( 'fastshop-es6-shim', '//cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.min.js' );
	wp_enqueue_script( 'fastshop-system-polyfills', '//cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.20/system-polyfills.js' );
	wp_enqueue_script( 'fastshop-ie-shims', '//unpkg.com/angular2@2.0.0-beta.11/es6/dev/src/testing/shims_for_IE.js' );

	wp_enqueue_script( 'fastshop-ng-polyfills', '//cdnjs.cloudflare.com/ajax/libs/angular.js/2.0.0-beta.9/angular2-polyfills.min.js' );
	wp_enqueue_script( 'fastshop-ng-system', '//code.angularjs.org/tools/system.js' );
	wp_enqueue_script( 'fastshop-typescript', '//cdnjs.cloudflare.com/ajax/libs/typescript/1.8.9/typescript.min.js' );
	wp_enqueue_script( 'fastshop-ng-Rx', FS_URL . '/js/ng-deps/Rx.min.js' );
	wp_enqueue_script( 'fastshop-ng', '//cdnjs.cloudflare.com/ajax/libs/angular.js/2.0.0-beta.9/angular2.dev.js' );
	wp_enqueue_script( 'fastshop-ng-router', FS_URL . '/js/ng-deps/router.min.js' );

	$wc_assets = str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/';
	wp_enqueue_script( 'prettyPhoto', $wc_assets . 'js/prettyPhoto/jquery.prettyPhoto.min.js', array( 'jquery' ), '3.1.6', true );
	wp_enqueue_script( 'prettyPhoto-init', $wc_assets . 'js/prettyPhoto/jquery.prettyPhoto.init.min.js', array( 'jquery','prettyPhoto' ) );
	wp_enqueue_style( 'woocommerce_prettyPhoto_css', $wc_assets . 'css/prettyPhoto.css' );

	wp_enqueue_script( 'fastshop-navigation', FS_URL . '/js/navigation.min.js', array( 'jquery' ), '20120206', true );
	wp_enqueue_script( 'fastshop-skip-link-focus-fix', FS_URL . '/js/skip-link-focus-fix.min.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	?>
	<base href="<?php echo site_url() ?>">
	<?php
}


/**
 * Enqueue scripts and styles.
 * @action wp_head
 * @since  1.0.0
 */
function fastshop_system_init() {

}

/**
 * Enqueue child theme stylesheet.
 * A separate function is required as the child theme css needs to be enqueued _after_ the parent theme
 * primary css and the separate WooCommerce css.
 * @since  1.5.3
 */
function fastshop_child_scripts() {
	if ( is_child_theme() ) {
		wp_enqueue_style( 'fastshop-child-style', get_stylesheet_uri(), '' );
	}
}
