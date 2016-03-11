System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(_routeParams) {
                    this.product = _routeParams.params;
                }
                ProductComponent.prototype.ngOnInit = function () {
                };
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: 'fs-product',
                        template: "\n\t<div  style=\"text-align: center\">\n\t\t<h1>{{product.title}}</h1>\n\t\t<center><img [attr.src]=\"product.thumbnail\" class=\"attachment-shop_catalog size-shop_catalog wp-post-image\" alt=\"{{product.title}} image\"/></center>\n\t\t<h3>\n\t\t\t<del><span class=\"amount\">{{ product.delPrice }}</span></del>\n\t\t\t<ins><span class=\"amount\">{{ product.price }}</span></ins>\n\t\t</h3>\n\t</div>\n\t",
                        //templateUrl: fsl10n.url + '/ng/tpl/product.html',
                        inputs: ['hero']
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], ProductComponent);
                return ProductComponent;
            })();
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map