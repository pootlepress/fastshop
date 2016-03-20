/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";
import {ProductsComponent} from "./products.component.ts";

@Component({
	selector: 'fs-single',
	templateUrl: fastShopData.url + '/ng/tpl/single.html',
	inputs: ['hero'],
	directives: [ ProductsComponent ],
})
export class SingleComponent implements OnInit {
	private html : string;

	constructor( private router: Router, private routeParams: RouteParams, private wpApi: WPAPI_Service ) {}

	ngOnInit() {
		this.wpApi.api( 'single?name=' + this.routeParams.params.slug )
			.success( res => this.html = res );

		jQuery( 'body' )
			.addClass( 'single' )
			.removeClass( 'archive post-type-archive post-type-archive-product tax-product_cat tax-product_tag' );
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
	ID				: number,
}