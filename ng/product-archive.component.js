System.register(['angular2/core', 'angular2/router', "./wpapi.service.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, wpapi_service_ts_1;
    var ArchiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wpapi_service_ts_1_1) {
                wpapi_service_ts_1 = wpapi_service_ts_1_1;
            }],
        execute: function() {
            ArchiveComponent = (function () {
                function ArchiveComponent(router, routeParams, wpApi) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.wpApi = wpApi;
                    this.qry_args = '';
                }
                ArchiveComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!fastshopPreloaded) {
                        this.wpApi.api('products?' + this.qry_args)
                            .success(function (res) { return _this.products = JSON.parse(res); });
                    }
                    else if ('object' == typeof fastshopPreloaded) {
                        this.products = fastshopPreloaded;
                        fastshopPreloaded = null;
                    }
                };
                ArchiveComponent.prototype.openProduct = function (product) {
                    fastshopPreloaded = product;
                    this.router.navigate(['Product', { slug: product.slug }]);
                };
                ArchiveComponent.prototype.productClasses = function (classes, i) {
                    ++i;
                    switch (i % 3) {
                        case 0:
                            classes += ' last';
                            break;
                        case 1:
                            classes += ' first';
                    }
                    return i + ' ' + i % 3 + classes;
                };
                ArchiveComponent = __decorate([
                    core_1.Component({
                        selector: 'fs-product-archive',
                        templateUrl: fastShopData.url + '/ng/tpl/archive.html',
                        inputs: ['products']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, wpapi_service_ts_1.WPAPI_Service])
                ], ArchiveComponent);
                return ArchiveComponent;
            })();
            exports_1("ArchiveComponent", ArchiveComponent);
        }
    }
});
//# sourceMappingURL=product-archive.component.js.map