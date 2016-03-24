<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package fastshop
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> <?php fastshop_html_tag_schema(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<script>

	<?php
	$site_url = untrailingslashit( site_url() );
	$site_name = get_bloginfo( 'name' );
	$shop_page_url = untrailingslashit( get_permalink( wc_get_page_id( 'shop' ) ) );
	$pootlepress = '<a href="http://www.pootlepress.com">pootlepress</a>';
	if ( get_option( 'show_on_front' ) == 'page' ) {
		$home = get_post( get_option( 'page_on_front' ) );
		$home = $home ? $home->post_name : $home;
		$blog = get_post( get_option( 'page_for_posts' ) );
		$blog = $blog ? $blog->post_name : $blog;
	} else {
		$home = '';
		$blog = '';
	}
	$fs_data = array(
		'url'      => FS_URL,
		'home'     => $home,
		'blog'     => $blog,
		'siteUrl'  => $site_url,
		'siteName' => $site_name,
		'tagline'  => get_bloginfo( 'description' ),
		'menu'     => wp_nav_menu(
			array(
				'theme_location'  => 'primary',
				'container_class' => 'primary-navigation',
				'echo'            => false,
			)
		),
		'routes'   => array(
			'product'    =>
				get_option( 'product_permalink_structure', '/product' ),
			'cat' =>
				get_option( 'category_base' ) ? get_option( 'category_base' ) : '/category',
			'tag' =>
				get_option( 'tag_base' )      ? get_option( 'tag_base' )      : '/tag',
			'productCat' =>
				get_option( 'woocommerce_product_category_slug', '/product-category' ),
			'productTag' =>
				get_option( 'woocommerce_product_tag_slug', '/product-tag' ),
			'shop'       =>
				str_replace( $site_url, '', $shop_page_url ) ? str_replace( $site_url, '', $shop_page_url ) : 'does-not-exist-23kjbfrnfernf8437fnk78n5gf',
		),
		'wcStyle'  => WC()->plugin_url() . '/assets/css/woocommerce.css',
		'footer' => "&copy; $site_name " . date( 'Y' ) . '<br>' . sprintf( __( '%1$s designed by %2$s.', 'fastshop' ), 'Fast shop', $pootlepress ),
		'copy' => apply_filters( 'fastshop_copyright_text', "&copy; $site_name " . date( 'Y' ) ),
	);
	ob_start();
	get_sidebar();
	$fs_data['sidebar'] = ob_get_contents();
	ob_end_clean();
	?>
	fastshopData = <?php echo json_encode( $fs_data ) ?>;
	fastshopData.adminbar = function ( id, postType ) {
		var $   = jQuery,
			$ab = $( '#wp-admin-bar-root-default' );
		postType = postType ? postType.replace( '-', ' ' ) : 'Post';
		postType = postType.charAt(0).toUpperCase() + postType.slice(1);
		if ( $ab.length ) {
			$( '#wp-admin-bar-edit' ).remove();
			if ( id ) {
				var $a = $( '<a/>' ),
					$li = $( '<li/>' );
				$a
					.addClass( 'ab-item' )
					.attr( 'href', '<?php echo admin_url() ?>/post.php?post=' + id + '&action=edit' )
					.html( 'Edit ' + postType );
				$li
					.attr( 'id', 'wp-admin-bar-edit' )
					.append( $a );
				$ab.append( $li );
			}
		}
	};
	fastshopPreloaded = null;
	System.config( {
		transpiler : 'typescript',
		typescriptOptions : { emitDecoratorMetadata : true },
		packages : { 'app' : { defaultExtension : 'js' } }
	} );
	System.import( '<?php echo FS_URL ?>/ng/app.ts' )
		.then( null, console.error.bind( console ) );
</script>
