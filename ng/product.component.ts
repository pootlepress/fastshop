/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";

@Component({
	selector: 'fs-product',
	templateUrl: fsl10n.url + '/ng/tpl/product.html',
	inputs: ['hero']
})
export class ProductComponent implements OnInit {
	private product = {
	post_classes : '',
	slug         : '',
	thumbnail    : '',
	title        : '',
	rating       : '',
	sale         : '',
	delPrice     : '',
	price        : '',
	ID           : 0
	};

	constructor( private router: Router, private routeParams: RouteParams, private wpApi: WPAPI_Service ) {
	}

	ngOnInit() {
		this.product = this.routeParams.params;
		this.wpApi.api( 'product?name=' + this.routeParams.params.slug )
			.success( res => this.product = JSON.parse( res ) );
		jQuery( 'body' )
			.addClass( 'single-product single' )
			.removeClass( 'archive post-type-archive post-type-archive-product tax-product_cat tax-product_tag' );
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