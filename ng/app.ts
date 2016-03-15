/// <reference path="../../../../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode, Component, OnChanges } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS } from 'angular2/router';

import { ArchiveComponent } from './archive.component.ts';
import { ProductComponent } from './product.component.ts';
import { WPAPI_Service } from "./wpapi.service.ts";

//enableProdMode();
// Add the component meta data

var fastshopRoutes = [
	{
		path: fsl10n.routes.product + '/:slug',
		name: 'Product',
		component: ProductComponent,
	},
	{
		path: fsl10n.routes.productCat + '/:cat',
		name: 'Product Category',
		component: ArchiveComponent
	},
	{
		path: fsl10n.routes.productTag + '/:tag',
		name: 'Product Tag',
		component: ArchiveComponent
	},
	{
		path: fsl10n.routes.shop,
		name: 'Shop',
		component: ArchiveComponent,
		//useAsDefault: true
	}
];

@Component( {
	selector: 'fastshop',
	template: `
	<h1>{{title}}</h1>
	<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ WPAPI_Service, ROUTER_PROVIDERS ]
} )
@RouteConfig( fastshopRoutes )
export class AppComponent implements OnChanges {
	constructor( private router: Router ) {}
	title	= 'Welcome to FASTSHOPPE';
	routerOnActivate( instruction ) {
		console.log( 'Rerounting to ' + instruction );
	}
}

//Boot the app
bootstrap( AppComponent, [ ROUTER_PROVIDERS ] );