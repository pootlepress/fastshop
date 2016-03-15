/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {WPAPI_Service} from "./wpapi.service.ts";

var fastshopArchive : ArchiveProduct[] = [ {
	"post_classes":"product type-product product-placeholder first",
	"thumbnail":"",
	"title":"",
	"rating":"",
	"sale":"",
	"delPrice":"",
	"price":"",
	"ID":0
} ];

@Component( {
	selector: 'fs-product-archive',
	templateUrl: fsl10n.url + '/ng/tpl/archive.html',
	inputs: ['qry_args']
} )

export class ArchiveComponent implements OnInit {
	products : ArchiveProduct[] = fastshopArchive;
	qry_args : string = '';

	constructor( private router : Router, private routeParams : RouteParams, private wpApi : WPAPI_Service ) {
	}

	ngOnInit() {
		this.wpApi.api( 'products?' + this.qry_args )
			.success( res => fastshopArchive = this.products = JSON.parse( res ) );
	}

	openProduct( product ) {
		this.router.navigate( ['Product', product ] );
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