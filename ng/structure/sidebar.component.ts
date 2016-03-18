/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import { Component, OnInit } from 'angular2/core';

@Component( {
	selector: 'fs-sidebar',
	templateUrl: fastShopData.url + '/ng/structure/tpl/sidebar.html',
	inputs: []
} )
export class SidebarComponent implements OnInit {
	sidebar = fastShopData.sidebar;
	ngOnInit() {

	}
}