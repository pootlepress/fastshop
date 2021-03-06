/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */

import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode, Component, ElementRef } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams, ROUTER_PROVIDERS } from 'angular2/router';

import { ProductsComponent } from './products.component.ts';
import { ProductComponent } from './product.component.ts';
import { SingleComponent }  from './single.component.ts';
import { BlogComponent } from "./blog.component.ts";

import { HeaderComponent }  from './structure/header.component.ts';
import { SidebarComponent } from './structure/sidebar.component.ts';
import { FooterComponent }  from './structure/footer.component.ts';

import { WPAPI_Service } from "./wpapi.service.ts";
import {OnInit} from "angular2/core";

enableProdMode();

var fastshopRoutes = [
	{
		path: fastshopData.routes.product + '/:slug',
		name: 'Product',
		component: ProductComponent,
	},
	{
		path: fastshopData.routes.cat + '/:cat',
		name: 'Category',
		component: BlogComponent
	},
	{
		path: fastshopData.routes.cat + '/:parentCat/:cat',
		name: 'Category',
		component: BlogComponent
	},
	{
		path: fastshopData.routes.cat + '/:grandParentCat/:parentCat/:cat',
		name: 'Category',
		component: BlogComponent
	},
	{
		path: fastshopData.routes.tag + '/:tag',
		name: 'Tag',
		component: BlogComponent
	},
	{
		path: fastshopData.routes.productCat + '/:cat',
		name: 'Product Category',
		component: ProductsComponent
	},
	// For sub categories
	{
		path: fastshopData.routes.productCat + '/:parentCat/:cat',
		name: 'Product Category',
		component: ProductsComponent
	},
	// For sub categories
	{
		path: fastshopData.routes.productCat + '/:grandParentCat/:parentCat/:cat',
		name: 'Product Category',
		component: ProductsComponent
	},
	{
		path: fastshopData.routes.productTag + '/:tag',
		name: 'Product Tag',
		component: ProductsComponent
	},
	{
		path: fastshopData.routes.shop + '/:term',
		name: 'Search',
		component: ProductsComponent
	},
	{
		path: fastshopData.routes.shop,
		name: 'Shop',
		component: ProductsComponent,
	},
	{
		path: '/:slug',
		name: 'Single',
		component: SingleComponent,
	},
	// For hierarchical post types
	{
		path: '/:parentSlug/:slug',
		name: 'Single',
		component: SingleComponent,
	},
	// For hierarchical post types
	{
		path: '/:grandParentSlug/:parentSlug/:slug',
		name: 'Single',
		component: SingleComponent,
	},
	// For hierarchical post types
	{
		path: '/:gr8GrandParentSlug/:grandParentSlug/:parentSlug/:slug',
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
	constructor( private el:ElementRef, router : Router ) {
		fastshopData.router = this.router = router;
	}

	ngOnInit() {
		fastshopData.appElement = this.el.nativeElement;

		jQuery( fastshopData.appElement ).on( 'click', 'a[href^="' + fastshopData.siteUrl + '"]', function ( e ) {
			var $t = jQuery( this ),
			    route = $t.attr( 'href' );
			if ( -1 == route.indexOf( fastshopData.siteUrl + '/wp-' ) ) {
				e.preventDefault();
				route = route.replace( fastshopData.siteUrl, '' );
				fastshopData.router.navigateByUrl( route );
			}
		} );
	}
}

//Boot the app
bootstrap( AppComponent, [ROUTER_PROVIDERS] );