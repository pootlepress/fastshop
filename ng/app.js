/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './archive.component.ts', './product.component.ts', "./wpapi.service.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, archive_component_ts_1, product_component_ts_1, wpapi_service_ts_1;
    var fastshopRoutes, AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (archive_component_ts_1_1) {
                archive_component_ts_1 = archive_component_ts_1_1;
            },
            function (product_component_ts_1_1) {
                product_component_ts_1 = product_component_ts_1_1;
            },
            function (wpapi_service_ts_1_1) {
                wpapi_service_ts_1 = wpapi_service_ts_1_1;
            }],
        execute: function() {
            //enableProdMode();
            // Add the component meta data
            fastshopRoutes = [
                {
                    path: fastShopData.routes.product + '/:slug',
                    name: 'Product',
                    component: product_component_ts_1.ProductComponent,
                },
                {
                    path: fastShopData.routes.productCat + '/:cat',
                    name: 'Product Category',
                    component: archive_component_ts_1.ArchiveComponent
                },
                {
                    path: fastShopData.routes.productCat + '/:parentCat/:cat',
                    name: 'Product Category',
                    component: archive_component_ts_1.ArchiveComponent
                },
                {
                    path: fastShopData.routes.productCat + '/:grandParentCat/:parentCat/:cat',
                    name: 'Product Category',
                    component: archive_component_ts_1.ArchiveComponent
                },
                {
                    path: fastShopData.routes.productTag + '/:tag',
                    name: 'Product Tag',
                    component: archive_component_ts_1.ArchiveComponent
                },
                {
                    path: fastShopData.routes.shop,
                    name: 'Shop',
                    component: archive_component_ts_1.ArchiveComponent,
                }
            ];
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.preloaded = '';
                    fastShopData.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    jQuery('a[href="' + fastShopData.site_url + fastShopData.routes.shop + '"]').click(function (e) {
                        e.preventDefault();
                        _this.router.navigate(['Shop']);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'fastshop',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [wpapi_service_ts_1.WPAPI_Service, router_1.ROUTER_PROVIDERS],
                        inputs: ['preloaded']
                    }),
                    router_1.RouteConfig(fastshopRoutes), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            //Boot the app
            browser_1.bootstrap(AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map