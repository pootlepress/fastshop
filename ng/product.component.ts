/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'fs-product',
	template: `
	<div  style="text-align: center">
		<h1>{{product.title}}</h1>
		<center><img [attr.src]="product.thumbnail" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="{{product.title}} image"/></center>
		<h3>
			<del><span class="amount">{{ product.delPrice }}</span></del>
			<ins><span class="amount">{{ product.price }}</span></ins>
		</h3>
	</div>
	`,
	//templateUrl: fsl10n.url + '/ng/tpl/product.html',
	inputs: ['hero']
})
export class ProductComponent implements OnInit {
	private product;
	constructor( _routeParams: RouteParams) {
		this.product = _routeParams.params;
	}

	ngOnInit() {
	}
}