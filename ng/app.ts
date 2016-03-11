/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode,Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import { ArchiveComponent } from './archive.component.ts';
import { ProductComponent } from './product.component.ts';
import { WPAPI_Service } from "./wpapi.service.ts";

//enableProdMode();
// Add the component meta data

@Component( {
	selector: 'fastshop',
	template: `
	<h1>{{title}}</h1>
	<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ WPAPI_Service, HTTP_PROVIDERS, ROUTER_PROVIDERS ]
} )

@RouteConfig( [
	{
		path : fsl10n.routes.product,
		name : 'Product',
		component : ProductComponent,
	},
	{
		path : fsl10n.routes.productCat,
		name : 'Product Category',
		component : ArchiveComponent
	},
	{
		path : fsl10n.routes.productTag,
		name : 'Product Tag',
		component : ArchiveComponent
	},
	{
		path : fsl10n.routes.shop,
		name : 'Shop',
		component : ArchiveComponent,
		//useAsDefault: true
	}
] )

export class AppComponent implements OnInit {
	wpApi : WPAPI_Service;
	constructor ( wpApi: WPAPI_Service) {
		this.wpApi = wpApi;
	}
	ngOnInit ( ) {
		//this.wpApi.wp( 'products' );
	}
	title           = 'Welcome to FASTSHOPPE';
	editingHero     = null;
}

//Boot the app
bootstrap(AppComponent);