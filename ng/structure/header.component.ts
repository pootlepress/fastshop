/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component( {
	selector: 'fs-header',
	templateUrl: fastshopData.url + '/ng/structure/tpl/header.html',
	inputs: []
} )
export class HeaderComponent implements OnInit {
	//constructor( private router : Router, private routeParams : RouteParams ) {}
	siteUrl = fastshopData.siteUrl;
	siteName = fastshopData.siteName;
	tagline = fastshopData.tagline;
	menu = fastshopData.menu;
	ngOnInit() {}
	search( term ) {
		fastshopData.router.navigate( ['Search', { term: term }] );
	}
}