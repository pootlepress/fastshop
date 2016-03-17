/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */

import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode, Component, OnChanges } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS } from 'angular2/router';

import { ArchiveComponent } from './archive.component.ts';
import { ProductComponent } from './product.component.ts';
import { WPAPI_Service } from "./wpapi.service.ts";
import {OnInit} from "angular2/core";

//enableProdMode();
// Add the component meta data

var fastshopRoutes = [
	{
		path: fastShopData.routes.product + '/:slug',
		name: 'Product',
		component: ProductComponent,
	},
	{
		path: fastShopData.routes.productCat + '/:cat',
		name: 'Product Category',
		component: ArchiveComponent
	},
	{
		path: fastShopData.routes.productCat + '/:parentCat/:cat',
		name: 'Product Category',
		component: ArchiveComponent
	},
	{
		path: fastShopData.routes.productCat + '/:grandParentCat/:parentCat/:cat',
		name: 'Product Category',
		component: ArchiveComponent
	},
	{
		path: fastShopData.routes.productTag + '/:tag',
		name: 'Product Tag',
		component: ArchiveComponent
	},
	{
		path: fastShopData.routes.shop,
		name: 'Shop',
		component: ArchiveComponent,
		//useAsDefault: true
	}
];

@Component( {
	selector: 'fastshop',
	template: '<router-outlet></router-outlet>',
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ WPAPI_Service, ROUTER_PROVIDERS ],
	inputs: [ 'preloaded' ]
} )
@RouteConfig( fastshopRoutes )
export class AppComponent implements OnInit {
	preloaded : string = '';
	constructor( private router: Router ) {
		fastShopData.router = router;
	}
	ngOnInit() {
		jQuery( 'a[href="' + fastShopData.site_url + fastShopData.routes.shop + '"]' ).click( ( e ) => {
			e.preventDefault();
			this.router.navigate( [ 'Shop' ] );
		} );
	}
}

//Boot the app
bootstrap( AppComponent, [ ROUTER_PROVIDERS ] );