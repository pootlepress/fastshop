/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";

@Component({
	selector: 'fs-blog',
	templateUrl: fastshopData.url + '/ng/tpl/blog.html',
	inputs: ['qry_args']
})
export class BlogComponent implements OnInit {
	constructor( private wpApi: WPAPI_Service, private routeParams: RouteParams ) {}
	qry_args : string;
	jsonData : {} = {};
	paged : number = 1;
	html : string;
	query() {
		var args = this.qry_args ? this.qry_args + '&' : '';
		if ( this.routeParams.params ) {
			if ( this.routeParams.params.term ) {
				args += 's=' + this.routeParams.params.term;
			}
			if ( this.routeParams.params.cat ) {
				args += 'category_name=' + this.routeParams.params.cat;
			}
			if ( this.routeParams.params.tag ) {
				args += 'tag=' + this.routeParams.params.tag;
			}
		}
		this.wpApi.api( 'posts?post_type=post&paged=' + this.paged + '&' + args )
			.success( ( res ) => {
				this.jsonData = JSON.parse( res );
				this.jsonData.pagination = [];
				var i = 0;
				while ( i++ < this.jsonData.total_pages ) {
					this.jsonData.pagination[i-1] = i;
				}
				this.html = this.jsonData.html;
			} );
	}

	changePage( page ) {
		this.paged = page;
		this.query();
	}

	ngOnInit() {
		this.query();

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