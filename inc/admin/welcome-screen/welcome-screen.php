<?php
/**
 * Welcome Screen Class
 * Sets up the welcome screen page, hides the menu item
 * and contains the screen content.
 */
class Fastshop_Welcome {

	/**
	 * Constructor
	 * Sets up the welcome screen
	 */
	public function __construct() {

		add_action( 'admin_menu', array( $this, 'fastshop_welcome_register_menu' ) );
		add_action( 'load-themes.php', array( $this, 'fastshop_activation_admin_notice' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'fastshop_welcome_style' ) );

		add_action( 'fastshop_welcome', array( $this, 'fastshop_welcome_intro' ), 				10 );
		add_action( 'fastshop_welcome', array( $this, 'fastshop_welcome_enhance' ), 			20 );
		add_action( 'fastshop_welcome', array( $this, 'fastshop_welcome_contribute' ), 			30 );

	} // end constructor

	/**
	 * Adds an admin notice upon successful activation.
	 * @since 1.0.3
	 */
	public function fastshop_activation_admin_notice() {
		global $pagenow;

		if ( is_admin() && 'themes.php' == $pagenow && isset( $_GET['activated'] ) ) { // input var okay
			add_action( 'admin_notices', array( $this, 'fastshop_welcome_admin_notice' ), 99 );
		}
	}

	/**
	 * Display an admin notice linking to the welcome screen
	 * @since 1.0.3
	 */
	public function fastshop_welcome_admin_notice() {
		?>
			<div class="updated notice is-dismissible">
				<p><?php echo sprintf( esc_html__( 'Thanks for choosing Fast shop! You can read hints and tips on how get the most out of your new theme on the %swelcome screen%s.', 'fastshop' ), '<a href="' . esc_url( admin_url( 'themes.php?page=fastshop-welcome' ) ) . '">', '</a>' ); ?></p>
				<p><a href="<?php echo esc_url( admin_url( 'themes.php?page=fastshop-welcome' ) ); ?>" class="button" style="text-decoration: none;"><?php _e( 'Get started with Fast shop', 'fastshop' ); ?></a></p>
			</div>
		<?php
	}

	/**
	 * Load welcome screen css
	 * @return void
	 * @since  1.4.4
	 */
	public function fastshop_welcome_style( $hook_suffix ) {
		global $fastshop_version;

		if ( 'appearance_page_fastshop-welcome' == $hook_suffix ) {
			wp_enqueue_style( 'fastshop-welcome-screen', get_template_directory_uri() . '/inc/admin/welcome-screen/css/welcome.css', $fastshop_version );
			wp_enqueue_style( 'thickbox' );
			wp_enqueue_script( 'thickbox' );
		}
	}

	/**
	 * Creates the dashboard page
	 * @see  add_theme_page()
	 * @since 1.0.0
	 */
	public function fastshop_welcome_register_menu() {
		add_theme_page( 'Fast shop', 'Fast shop', 'activate_plugins', 'fastshop-welcome', array( $this, 'fastshop_welcome_screen' ) );
	}

	/**
	 * The welcome screen
	 * @since 1.0.0
	 */
	public function fastshop_welcome_screen() {
		require_once( ABSPATH . 'wp-load.php' );
		require_once( ABSPATH . 'wp-admin/admin.php' );
		require_once( ABSPATH . 'wp-admin/admin-header.php' );
		?>
		<div class="wrap about-wrap">

			<?php
			/**
			 * @hooked fastshop_welcome_intro - 10
			 * @hooked fastshop_welcome_enhance - 20
			 * @hooked fastshop_welcome_contribute - 30
			 */
			do_action( 'fastshop_welcome' ); ?>

		</div>
		<?php
	}

	/**
	 * Welcome screen intro
	 * @since 1.0.0
	 */
	public function fastshop_welcome_intro() {
		require_once( get_template_directory() . '/inc/admin/welcome-screen/sections/intro.php' );
	}


	/**
	 * Welcome screen enhance section
	 * @since 1.5.2
	 */
	public function fastshop_welcome_enhance() {
		require_once( get_template_directory() . '/inc/admin/welcome-screen/sections/enhance.php' );
	}

	/**
	 * Welcome screen contribute section
	 * @since 1.5.2
	 */
	public function fastshop_welcome_contribute() {
		require_once( get_template_directory() . '/inc/admin/welcome-screen/sections/contribute.php' );
	}
}

$GLOBALS['Fastshop_Welcome'] = new Fastshop_Welcome();
