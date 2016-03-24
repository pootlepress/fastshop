/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";
import {ProductsComponent} from "./products.component.ts";

@Component({
	selector: 'fs-product',
	templateUrl: fastshopData.url + '/ng/tpl/product.html',
	directives: [ ProductsComponent ],
})
export class ProductComponent implements OnInit {
	private product : SingleProduct = {
		post_classes	: '',
		slug			: '',
		tabs			: '',
		upsells			: '',
		cartForm		: '',
		related			: '',
		content			: '',
		thumbnail		: '',
		meta			: '',
		title			: '',
		rating			: '',
		sale			: '',
		delPrice		: '',
		price			: '',
		ID				: 0
	};

	constructor( private router: Router, private routeParams: RouteParams, private wpApi: WPAPI_Service ) {
	}

	ngOnInit() {
		this.wpApi.api( 'product?name=' + this.routeParams.params.slug )
			.success( res => {
				this.product = JSON.parse( res );
				setTimeout( function () {
					jQuery( '.zoom, [data-rel^="prettyPhoto"]' ).prettyPhoto( {
						hook: 'data-rel',
						social_tools: false,
						theme: 'pp_woocommerce',
						horizontal_padding: 20,
						opacity: 0.8,
						deeplinking: false
					} );
				}, 500 );
				fastshopData.adminbar( this.product.ID, 'Product' );
			} );
	}

	takeToShop() {
		fastshopData.router.navigateByUrl( '/shop' );
	}
	routerOnDeactivate () {
		jQuery( 'body' )
			.removeClass( 'single-product single' );
	}
	routerOnActivate () {
		if ( fastshopPreloaded ) {
			this.product = fastshopPreloaded;
			fastshopPreloaded = null;
		}
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		jQuery( 'body' )
			.addClass( 'single-product single' )
			.removeClass( 'archive post-type-archive post-type-archive-product tax-product_cat tax-product_tag' );
	}
	openProduct( product ) {
		fastshopData.router.navigateByUrl( '/product/' + product.slug );
	}

	productClasses( classes, i ) {
		++ i;
		switch ( i % 3 ) {
			case 0:
				classes += ' last';
				break;
			case 1:
				classes += ' first';
		}
		return i + ' ' + i % 3 + classes;
	}

}

interface SingleProduct {
	post_classes	: string,
	slug			: string,
	tabs			: string,
	related			: Array,
	upsells			: Array,
	cartForm		: string,
	content			: string,
	meta			: string,
	thumbs			: string,
	thumbnail		: string,
	title			: string,
	rating			: string,
	sale			: string,
	delPrice		: string,
	price			: string,
	ID				: int,
}