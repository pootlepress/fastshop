/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {WPAPI_Service} from "./wpapi.service.ts";


@Component( {
	selector: 'fs-product-archive',
	templateUrl: fastshopData.url + '/ng/tpl/products.html',
	inputs: ['qry_args']
} )

export class ProductsComponent implements OnInit {
	products : ArchiveProduct[];
	jsonData : {} = {};
	qry_args : string = '';
	orderby : string = 'menu_order';
	paged : number = 1;
	pages : number = 1;
	error : string;

	constructor( private router : Router, private routeParams : RouteParams, private wpApi : WPAPI_Service ) {}

	query( qry ) {
		var args = this.qry_args ? this.qry_args + '&' : '';
		var args = qry ? qry + '&' : args;
		if ( this.routeParams.params ) {
			if ( this.routeParams.params.cat ) {
				args += 'product_cat=' + this.routeParams.params.cat;
			}
			if ( this.routeParams.params.tag ) {
				args += 'product_tag=' + this.routeParams.params.tag;
			}
			if ( ! this.error && this.routeParams.params.term ) {
				args += 's=' + this.routeParams.params.term;
			}
		}
		this.wpApi.api( 'products?paged=' + this.paged + '&orderby=' + this.orderby + '&' + args )
			.success( ( res ) => {
					var json = JSON.parse( res );
				if ( json && json.products ) {
					json.pagination = [];
					var i = 0;
					while ( i ++ < json.total_pages ) {
						json.pagination[i - 1] = i;
					}
					this.products = json.products;
					this.jsonData = json;
				} else {
					if ( this.routeParams.params.term ) {
						this.error = "<h1>Sorry no products could be found for '" + this.routeParams.params.term + "'...</h1><h2>Here are the most popular products</h2>";
						this.query( 'orderby=popularity&posts_per_page=12' );
					} else {
						this.error = "<h1>Sorry no products found...</h1>";
					}
				}
			} );
	}

	changePage( page ) {
		this.paged = page;
		this.query();
	}

	changeOrder( order ) {
		this.orderby = order;
		this.query();
	}

	ngOnInit() {
		if ( ! fastshopPreloaded ) {
			this.query();
		} else if ( 'object' == typeof fastshopPreloaded ) {
			this.products = fastshopPreloaded;
			fastshopPreloaded = null;
		}

		jQuery( fastshopData.appElement ).find( 'fs-product-archive' ).delegate( '.page-numbers', "click", function ( e ) {
			e.preventDefault();
			var $t = jQuery( this ),
			    route = $t.attr( 'href' );
			if ( -1 == route.indexOf( fastshopData.siteUrl + '/wp-' ) ) {
				route = route.replace( fastshopData.siteUrl, '' );
				fastshopData.router.navigateByUrl( route );
			}
		} );
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

interface ArchiveProduct {
	post_classes : string,
	slug         : string,
	thumbnail    : string,
	title        : string,
	rating       : string,
	sale         : string,
	delPrice     : string,
	price        : string,
	ID           : number
}