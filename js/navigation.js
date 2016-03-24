/**
 * navigation.js
 *
 * Handles toggling the navigation $menu for small screens and adds a focus class to parent li's for accessibility.
 */
( function( $ ) {
	var $container, $button, $menu;

	$container = $( '#site-navigation' );
	if ( ! $container ) {
		return;
	}

	$button = $container.find( '.menu-toggle' );
	if ( ! $button.length ) {
		return;
	}

	$menu = $container.find( 'ul.menu' );

	// Hide $menu toggle $button if $menu is empty and return early.
	if ( ! $menu.length ) {
		$button.css( 'display', 'none' );
		return;
	}

	$menu.attr( 'aria-expanded', 'false' );

	if ( ! $menu.hasClass( 'nav-menu' ) ) {
		$menu.addClass( ' nav-menu' );
	}

	$button.click( function() {
		if ( $container.hasClass( 'toggled' ) ) {
			$container.removeClass( 'toggled' );
			$button.attr( 'aria-expanded', 'false' );
			$menu.attr( 'aria-expanded', 'false' );
		} else {
			$container.addClass( 'toggled' );
			$button.attr( 'aria-expanded', 'true' );
			$menu.attr( 'aria-expanded', 'true' );
		}
	} );

	// Add focus class to li
	$( '.main-navigation, .secondary-navigation' ).find( 'a' ).on( 'focus.fastshop blur.fastshop', function() {
		$( this ).parents().toggleClass( 'focus' );
	});

	// Add focus to cart dropdown
	$( window ).load( function() {
		$( '.site-header-cart' ).find( 'a' ).on( 'focus.fastshop blur.fastshop', function() {
			$( this ).parents().toggleClass( 'focus' );
		});
	});

	$( 'fastshop' ).delegate( "a", "click", function ( e ) {
		var $t = $( this ),
			route = $t.attr( 'href' );
		console.log( route.indexOf( fastshopData.siteUrl ) );
		if ( -1 !== route.indexOf( fastshopData.siteUrl ) ) {
			e.preventDefault();
			route = route.replace( fastshopData.siteUrl );
			fastshopData.router.navigateByUrl( route );
		}
		e.preventDefault();
	} );

} )( jQuery );
