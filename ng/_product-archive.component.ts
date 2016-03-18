/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {WPAPI_Service} from "./wpapi.service.ts";

@Component( {
	selector: 'fs-product-archive',
	templateUrl: fastShopData.url + '/ng/tpl/archive.html',
	inputs: ['products']
} )

export class ProductsComponent implements OnInit {
	products : ArchiveProduct[];
	qry_args : string = '';

	constructor( private router : Router, private routeParams : RouteParams, private wpApi : WPAPI_Service ) {
	}

	ngOnInit() {
		if ( ! fastshopPreloaded ) {
			this.wpApi.api( 'products?' + this.qry_args )
				.success( res => this.products = JSON.parse( res ) );
		} else if ( 'object' == typeof fastshopPreloaded ) {
			this.products = fastshopPreloaded;
			fastshopPreloaded = null;
		}
	}

	openProduct( product ) {
		fastshopPreloaded = product;
		this.router.navigate( ['Product', { slug: product.slug } ] );
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