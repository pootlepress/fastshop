System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './archive.component.ts', './product.component.ts', "./wpapi.service.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, http_1, archive_component_ts_1, product_component_ts_1, wpapi_service_ts_1;
    var AppComponent;
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
            function (http_1_1) {
                http_1 = http_1_1;
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
            AppComponent = (function () {
                function AppComponent(wpApi) {
                    this.title = 'Welcome to FASTSHOPPE';
                    this.editingHero = null;
                    this.wpApi = wpApi;
                }
                AppComponent.prototype.ngOnInit = function () {
                    //this.wpApi.wp( 'products' );
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'fastshop',
                        template: "\n\t<h1>{{title}}</h1>\n\t<router-outlet></router-outlet>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [wpapi_service_ts_1.WPAPI_Service, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: fsl10n.routes.product,
                            name: 'Product',
                            component: product_component_ts_1.ProductComponent,
                        },
                        {
                            path: fsl10n.routes.productCat,
                            name: 'Product Category',
                            component: archive_component_ts_1.ArchiveComponent
                        },
                        {
                            path: fsl10n.routes.productTag,
                            name: 'Product Tag',
                            component: archive_component_ts_1.ArchiveComponent
                        },
                        {
                            path: fsl10n.routes.shop,
                            name: 'Shop',
                            component: archive_component_ts_1.ArchiveComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [wpapi_service_ts_1.WPAPI_Service])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            //Boot the app
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map