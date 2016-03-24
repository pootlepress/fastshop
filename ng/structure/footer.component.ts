/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';

@Component( {
	selector: 'fs-footer',
	templateUrl: fastshopData.url + '/ng/structure/tpl/footer.html',
	inputs: []
} )
export class FooterComponent implements OnInit {
	footer = fastshopData.footer;
	ngOnInit() {

	}
}