/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Component( {
	selector: 'fs-product-archive',
	template: `
	<ul class="products">
		<li *ngFor="#p of products" [attr.class]="p.post_classes">
			<a (click)="openProduct(p)">
				<img *ngIf="p.thumbnail" [attr.src]="p.thumbnail" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="{{p.title}} image"/>
				<h3>{{p.title}}</h3>
				{{p.rating}}
				{{p.sale}}
				<span class="price">
					<del *ngIf="p.delPrice"><span class="amount">{{ p.delPrice }}</span></del>
					<ins><span class="amount">{{ p.price }}</span></ins>
				</span>
			</a>
			<a rel="nofollow" href="/ng/shop/?add-to-cart={{p.ID}}" data-quantity="1" [attr.dataProduct_id]="p.ID" data-product_sku=""
			       class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
		</li>
	</ul>
	`,
//	templateUrl: fsl10n.url + '/ng/tpl/archive.html',
//	styleUrls:  ['app/archive.component.css'],
//  directives: [HeroDetailComponent]
} )

export class ArchiveComponent {
  constructor( private _router: Router ) { }

	openProduct ( product ) {
		this._router.navigate(['Product', product]);
	}
	products : ArchiveProduct[] = JSON.parse( "[" +
	                                          "{\"post_classes\":\"post-99 product type-product status-publish has-post-thumbnail product_cat-music product_cat-singles sale shipping-taxable purchasable product-type-simple product-cat-music product-cat-singles instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-single-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_6_angle-180x180.jpg\",\"title\":\"Woo Single #2\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4.5 out of 5\\\"><span style=\\\"width:90%\\\"><strong class=\\\"rating\\\">4.5<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
	                                          "\"delPrice\":\"$3.00\"," +
	                                          "\"price\":\"$2.00\",\"ID\":99}," +
	                                          "{\"post_classes\":\"post-96 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-4\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_5_angle-180x180.jpg\",\"title\":\"Woo Album #4\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 5 out of 5\\\"><span style=\\\"width:100%\\\"><strong class=\\\"rating\\\">5<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$9.00\"," +
	                                          "\"price\":\"$9.00\",\"ID\":96}," +
	                                          "{\"post_classes\":\"post-93 product type-product status-publish has-post-thumbnail product_cat-music product_cat-singles downloadable shipping-taxable purchasable product-type-simple product-cat-music product-cat-singles instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-single-1\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_4_angle-180x180.jpg\",\"title\":\"Woo Single #1\",\"rating\":\"\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$3.00\"," +
	                                          "\"price\":\"$3.00\",\"ID\":93}," +
	                                          "{\"post_classes\":\"post-90 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_3_angle-180x180.jpg\",\"title\":\"Woo Album #3\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 3 out of 5\\\"><span style=\\\"width:60%\\\"><strong class=\\\"rating\\\">3<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$9.00\"," +
	                                          "\"price\":\"$9.00\",\"ID\":90}," +
	                                          "{\"post_classes\":\"post-87 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_2_angle-180x180.jpg\",\"title\":\"Woo Album #2\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$9.00\"," +
	                                          "\"price\":\"$9.00\",\"ID\":87}," +
	                                          "{\"post_classes\":\"post-83 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-1\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_1_angle-180x180.jpg\",\"title\":\"Woo Album #1\",\"rating\":\"\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$9.00\"," +
	                                          "\"price\":\"$9.00\",\"ID\":83}," +
	                                          "{\"post_classes\":\"post-79 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-logo-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_5_up-180x180.jpg\",\"title\":\"Woo Logo\",\"rating\":\"\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$15.00\"," +
	                                          "\"price\":\"$15.00\",\"ID\":79}," +
	                                          "{\"post_classes\":\"post-76 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-ninja-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_4_up-180x180.jpg\",\"title\":\"Woo Ninja\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$15.00\"," +
	                                          "\"price\":\"$15.00\",\"ID\":76}," +
	                                          "{\"post_classes\":\"post-73 product type-product status-publish has-post-thumbnail product_cat-posters sale shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/premium-quality-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_3_up-180x180.jpg\",\"title\":\"Premium Quality\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 2 out of 5\\\"><span style=\\\"width:40%\\\"><strong class=\\\"rating\\\">2<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
	                                          "\"delPrice\":\"$15.00\"," +
	                                          "\"price\":\"$12.00\",\"ID\":73}," +
	                                          "{\"post_classes\":\"post-70 product type-product status-publish has-post-thumbnail product_cat-posters sale shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/flying-ninja\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_2_up-180x180.jpg\",\"title\":\"Flying Ninja\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
	                                          "\"delPrice\":\"$15.00\"," +
	                                          "\"price\":\"$12.00\",\"ID\":70}," +
	                                          "{\"post_classes\":\"post-67 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/ship-your-idea-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_1_up-180x180.jpg\",\"title\":\"Ship Your Idea\",\"rating\":\"\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$15.00\"," +
	                                          "\"price\":\"$15.00\",\"ID\":67}," +
	                                          "{\"post_classes\":\"post-60 product type-product status-publish has-post-thumbnail product_cat-clothing product_cat-hoodies shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-hoodies instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-logo-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/hoodie_6_front-180x180.jpg\",\"title\":\"Woo Logo\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
	                                          "\"delPrice\":\"$35.00\"," +
	                                          "\"price\":\"$35.00\",\"ID\":60}]" );
}

interface ArchiveProduct {
	post_classes : string,
	permalink    : string,
	thumbnail    : string,
	title        : string,
	rating       : string,
	sale         : string,
	delPrice     : string,
	price        : string,
	ID           : number
}