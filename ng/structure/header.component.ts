/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';

@Component( {
	selector: 'fs-header',
	templateUrl: fastShopData.url + '/ng/structure/tpl/header.html',
	inputs: []
} )
export class HeaderComponent implements OnInit {

	siteUrl = fastShopData.siteUrl;
	siteName = fastShopData.siteName;
	tagline = fastShopData.tagline;
	menu = fastShopData.menu;
	ngOnInit() {}
}