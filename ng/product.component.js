System.register(['angular2/core', 'angular2/router', "./wpapi.service.ts", "./archive.component.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, wpapi_service_ts_1, archive_component_ts_1;
    var ProductComponent;
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
            },
            function (archive_component_ts_1_1) {
                archive_component_ts_1 = archive_component_ts_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(router, routeParams, wpApi) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.wpApi = wpApi;
                    this.product = {
                        post_classes: '',
                        slug: '',
                        tabs: '',
                        upsells: '',
                        cartForm: '',
                        related: '',
                        content: '',
                        thumbnail: '',
                        meta: '',
                        title: '',
                        rating: '',
                        sale: '',
                        delPrice: '',
                        price: '',
                        ID: 0
                    };
                }
                ProductComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.wpApi.api('product?name=' + this.routeParams.params.slug)
                        .success(function (res) { return _this.product = JSON.parse(res); });
                    jQuery('body')
                        .addClass('single-product single')
                        .removeClass('archive post-type-archive post-type-archive-product tax-product_cat tax-product_tag');
                };
                ProductComponent.prototype.routerOnDeactivate = function () {
                    jQuery('body')
                        .removeClass('single-product single');
                };
                ProductComponent.prototype.routerOnActivate = function () {
                    if (fastshopPreloaded) {
                        this.product = fastshopPreloaded;
                        fastshopPreloaded = null;
                    }
                };
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'fs-product',
                        templateUrl: fastShopData.url + '/ng/tpl/product.html',
                        inputs: ['hero'],
                        directives: [archive_component_ts_1.ArchiveComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, wpapi_service_ts_1.WPAPI_Service])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map