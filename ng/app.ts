/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */

import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode, Component, OnChanges } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS } from 'angular2/router';

import { ProductsComponent } from './products.component.ts';
import { ProductComponent } from './product.component.ts';
import { SingleComponent }  from './single.component.ts';

import { HeaderComponent }  from './structure/header.component.ts';
import { SidebarComponent } from './structure/sidebar.component.ts';
import { FooterComponent }  from './structure/footer.component.ts';

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
		component: ProductsComponent
	},
	{
		path: fastShopData.routes.productCat + '/:parentCat/:cat',
		name: 'Product Category',
		component: ProductsComponent
	},
	{
		path: fastShopData.routes.productCat + '/:grandParentCat/:parentCat/:cat',
		name: 'Product Category',
		component: ProductsComponent
	},
	{
		path: fastShopData.routes.productTag + '/:tag',
		name: 'Product Tag',
		component: ProductsComponent
	},
	{
		path: fastShopData.routes.shop,
		name: 'Shop',
		component: ProductsComponent,
	},
	{
		path: '/:name',
		name: 'Single',
		component: SingleComponent,
	}
];

@Component( {
	selector: 'fastshop',
	template: `
<div id="page" class="hfeed site">
	<fs-header></fs-header>
	<div id="content" class="site-content" tabindex="-1">
		<div class="col-full">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
					<router-outlet></router-outlet>
				</main><!-- #main -->
			</div><!-- #primary -->
			<fs-sidebar></fs-sidebar>
		</div><!-- .col-full -->
	</div><!-- #content -->
	<fs-footer></fs-footer>
</div><!-- #page -->
	`,
	directives: [HeaderComponent, SidebarComponent, FooterComponent, ROUTER_DIRECTIVES],
	providers: [WPAPI_Service, ROUTER_PROVIDERS],
	inputs: ['preloaded']
} )
@RouteConfig( fastshopRoutes )
export class AppComponent implements OnInit {
	preloaded : string = '';
	router;
	constructor( router : Router ) {
		this.router = router;
	}

	ngOnInit() {
		fastShopData.router = this.router;
		jQuery( 'body' ).delegate( 'a[href="' + fastShopData.siteUrl + fastShopData.routes.shop + '"]', "click", ( e ) => {
			e.preventDefault();
			this.router.navigate( ['Shop'] );
		} );
	}
}

//Boot the app
bootstrap( AppComponent, [ROUTER_PROVIDERS] );