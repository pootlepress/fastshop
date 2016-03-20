/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";
import {BlogComponent} from "./blog.component.ts";

@Component({
	selector: 'fs-single',
	templateUrl: fastShopData.url + '/ng/tpl/single.html',
	directives: [ BlogComponent ],
})
export class SingleComponent implements OnInit {
	html : string;
	slug : string;

	constructor( private router: Router, private routeParams: RouteParams, private wpApi: WPAPI_Service ) {}

	ngOnInit() {
		// For homepage
		var slug = '' == this.routeParams.params.slug ? fastShopData.home : this.routeParams.params.slug;
		// For Blog
		this.slug = slug.replace( fastShopData.blog, '' );

		if ( this.slug ) {
			this.wpApi.api( 'single?posts_per_page=1&name=' + this.slug )
				.success( res => this.html = res );

			jQuery( 'body' )
				.addClass( 'single' )
				.removeClass( 'archive post-type-archive post-type-archive-product tax-product_cat tax-product_tag' );
		} else {
			this.slug = 'blogComponent';
		}
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