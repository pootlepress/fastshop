/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';

@Component( {
	selector: 'fs-footer',
	templateUrl: fastShopData.url + '/ng/structure/tpl/footer.html',
	inputs: []
} )
export class FooterComponent implements OnInit {
	footer = fastShopData.footer;
	ngOnInit() {

	}
}