/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {WPAPI_Service} from "./wpapi.service.ts";

@Component({
	selector: 'fs-blog',
	templateUrl: fastShopData.url + '/ng/tpl/blog.html',
	inputs: ['qry_args']
})
export class BlogComponent implements OnInit {
	constructor( private wpApi: WPAPI_Service ) {}
	qry_args : string;
	html : string;
	ngOnInit() {
		this.wpApi.api( 'posts?post_type=post&' + this.qry_args )
			.success( res => this.html = res );

			jQuery( 'body' )
				.addClass( 'home blog' )
				.removeClass( 'single' );
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
	related			: {},
	upsells			: {},
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