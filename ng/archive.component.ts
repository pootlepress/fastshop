/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {WPAPI_Service} from "./wpapi.service.ts";

@Component( {
	selector: 'fs-product-archive',
	templateUrl: fsl10n.url + '/ng/tpl/archive.html',
//	styleUrls:  ['app/archive.component.css'],
//  directives: [HeroDetailComponent]
} )

export class ArchiveComponent implements OnInit {
	constructor( private router : Router, private routeParams : RouteParams, private wpApi : WPAPI_Service ) {
	}

	ngOnInit() {
		jQuery( 'body' )
			.removeClass( 'single-product single' );
		this.wpApi.api( 'products' )
			.success( res => this.products = JSON.parse( res ) );
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
		return i + ' ' + i % 3 + ' yo guys ' + classes;
	}

	products : ArchiveProduct[] = JSON.parse(
		"[" +
		"{\"post_classes\":\"product type-product product-placeholder first\",\"thumbnail\":\"\",\"title\":\"\",\"rating\":\"\",\"sale\":\"\",\"delPrice\":\"\",\"price\":\"\",\"ID\":0}" +
		"]"
	);
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