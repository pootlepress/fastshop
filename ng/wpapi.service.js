System.register(['angular2/core', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var WPAPI_Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            WPAPI_Service = (function () {
                function WPAPI_Service() {
                    this.url = fsl10n.site_url + '/wp-json/fastshop/v1/';
                }
                WPAPI_Service.prototype.construct = function (http) { };
                WPAPI_Service.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WPAPI_Service.prototype.wp = function (endpoint) {
                    alert(this.http);
                    return this.http
                        .get(this.url + endpoint)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                WPAPI_Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WPAPI_Service);
                return WPAPI_Service;
            })();
            exports_1("WPAPI_Service", WPAPI_Service);
        }
    }
});
//# sourceMappingURL=wpapi.service.js.map