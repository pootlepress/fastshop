/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component( {
	selector: 'fs-header',
	templateUrl: fastShopData.url + '/ng/structure/tpl/header.html',
	inputs: []
} )
export class HeaderComponent implements OnInit {
	//constructor( private router : Router, private routeParams : RouteParams ) {}
	siteUrl = fastShopData.siteUrl;
	siteName = fastShopData.siteName;
	tagline = fastShopData.tagline;
	menu = fastShopData.menu;
	ngOnInit() {}
}