/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class WPAPI_Service {
	construct( http : Http ) {}
	url = fsl10n.site_url + '/wp-json/fastshop/v1/';

	handleError ( error : Response ) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
	}

	wp ( endpoint ) {
		alert( this.http );
		return this.http
			.get( this.url + endpoint )
			.map( res => res.json().data )
			.catch( this.handleError );
	}
}