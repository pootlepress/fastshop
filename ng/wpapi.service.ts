/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import {Injectable}     from 'angular2/core';

@Injectable()
export class WPAPI_Service {
	construct() {}
	url = fsl10n.site_url + '/wp-json/fastshop/v1/';

	api ( endpoint ) {
		return jQuery.ajax( {
			url: this.url + endpoint,
		} );
	}
}