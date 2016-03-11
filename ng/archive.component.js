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
    var ArchiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ArchiveComponent = (function () {
                function ArchiveComponent(_router) {
                    this._router = _router;
                    this.products = JSON.parse("[" +
                        "{\"post_classes\":\"post-99 product type-product status-publish has-post-thumbnail product_cat-music product_cat-singles sale shipping-taxable purchasable product-type-simple product-cat-music product-cat-singles instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-single-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_6_angle-180x180.jpg\",\"title\":\"Woo Single #2\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4.5 out of 5\\\"><span style=\\\"width:90%\\\"><strong class=\\\"rating\\\">4.5<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
                        "\"delPrice\":\"$3.00\"," +
                        "\"price\":\"$2.00\",\"ID\":99}," +
                        "{\"post_classes\":\"post-96 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-4\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_5_angle-180x180.jpg\",\"title\":\"Woo Album #4\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 5 out of 5\\\"><span style=\\\"width:100%\\\"><strong class=\\\"rating\\\">5<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
                        "\"delPrice\":\"$9.00\"," +
                        "\"price\":\"$9.00\",\"ID\":96}," +
                        "{\"post_classes\":\"post-93 product type-product status-publish has-post-thumbnail product_cat-music product_cat-singles downloadable shipping-taxable purchasable product-type-simple product-cat-music product-cat-singles instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-single-1\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_4_angle-180x180.jpg\",\"title\":\"Woo Single #1\",\"rating\":\"\",\"sale\":\"\"," +
                        "\"delPrice\":\"$3.00\"," +
                        "\"price\":\"$3.00\",\"ID\":93}," +
                        "{\"post_classes\":\"post-90 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_3_angle-180x180.jpg\",\"title\":\"Woo Album #3\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 3 out of 5\\\"><span style=\\\"width:60%\\\"><strong class=\\\"rating\\\">3<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
                        "\"delPrice\":\"$9.00\"," +
                        "\"price\":\"$9.00\",\"ID\":90}," +
                        "{\"post_classes\":\"post-87 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_2_angle-180x180.jpg\",\"title\":\"Woo Album #2\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
                        "\"delPrice\":\"$9.00\"," +
                        "\"price\":\"$9.00\",\"ID\":87}," +
                        "{\"post_classes\":\"post-83 product type-product status-publish has-post-thumbnail product_cat-albums product_cat-music downloadable shipping-taxable purchasable product-type-simple product-cat-albums product-cat-music instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-album-1\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/cd_1_angle-180x180.jpg\",\"title\":\"Woo Album #1\",\"rating\":\"\",\"sale\":\"\"," +
                        "\"delPrice\":\"$9.00\"," +
                        "\"price\":\"$9.00\",\"ID\":83}," +
                        "{\"post_classes\":\"post-79 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-logo-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_5_up-180x180.jpg\",\"title\":\"Woo Logo\",\"rating\":\"\",\"sale\":\"\"," +
                        "\"delPrice\":\"$15.00\"," +
                        "\"price\":\"$15.00\",\"ID\":79}," +
                        "{\"post_classes\":\"post-76 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-ninja-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_4_up-180x180.jpg\",\"title\":\"Woo Ninja\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
                        "\"delPrice\":\"$15.00\"," +
                        "\"price\":\"$15.00\",\"ID\":76}," +
                        "{\"post_classes\":\"post-73 product type-product status-publish has-post-thumbnail product_cat-posters sale shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/premium-quality-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_3_up-180x180.jpg\",\"title\":\"Premium Quality\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 2 out of 5\\\"><span style=\\\"width:40%\\\"><strong class=\\\"rating\\\">2<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
                        "\"delPrice\":\"$15.00\"," +
                        "\"price\":\"$12.00\",\"ID\":73}," +
                        "{\"post_classes\":\"post-70 product type-product status-publish has-post-thumbnail product_cat-posters sale shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/flying-ninja\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_2_up-180x180.jpg\",\"title\":\"Flying Ninja\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"<span class='onsale'>Sale!<\\\/span>\"," +
                        "\"delPrice\":\"$15.00\"," +
                        "\"price\":\"$12.00\",\"ID\":70}," +
                        "{\"post_classes\":\"post-67 product type-product status-publish has-post-thumbnail product_cat-posters shipping-taxable purchasable product-type-simple product-cat-posters instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/ship-your-idea-3\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/poster_1_up-180x180.jpg\",\"title\":\"Ship Your Idea\",\"rating\":\"\",\"sale\":\"\"," +
                        "\"delPrice\":\"$15.00\"," +
                        "\"price\":\"$15.00\",\"ID\":67}," +
                        "{\"post_classes\":\"post-60 product type-product status-publish has-post-thumbnail product_cat-clothing product_cat-hoodies shipping-taxable purchasable product-type-simple product-cat-clothing product-cat-hoodies instock\",\"permalink\":\"http:\\\/\\\/pro\\\/ng\\\/product\\\/woo-logo-2\\\/\",\"thumbnail\":\"http:\\\/\\\/pro\\\/ng\\\/wp-content\\\/uploads\\\/2013\\\/06\\\/hoodie_6_front-180x180.jpg\",\"title\":\"Woo Logo\",\"rating\":\"<div class=\\\"star-rating\\\" title=\\\"Rated 4 out of 5\\\"><span style=\\\"width:80%\\\"><strong class=\\\"rating\\\">4<\\\/strong> out of 5<\\\/span><\\\/div>\",\"sale\":\"\"," +
                        "\"delPrice\":\"$35.00\"," +
                        "\"price\":\"$35.00\",\"ID\":60}]");
                }
                ArchiveComponent.prototype.openProduct = function (product) {
                    this._router.navigate(['Product', product]);
                };
                ArchiveComponent = __decorate([
                    core_1.Component({
                        selector: 'fs-product-archive',
                        template: "\n\t<ul class=\"products\">\n\t\t<li *ngFor=\"#p of products\" [attr.class]=\"p.post_classes\">\n\t\t\t<a (click)=\"openProduct(p)\">\n\t\t\t\t<img *ngIf=\"p.thumbnail\" [attr.src]=\"p.thumbnail\" class=\"attachment-shop_catalog size-shop_catalog wp-post-image\" alt=\"{{p.title}} image\"/>\n\t\t\t\t<h3>{{p.title}}</h3>\n\t\t\t\t{{p.rating}}\n\t\t\t\t{{p.sale}}\n\t\t\t\t<span class=\"price\">\n\t\t\t\t\t<del *ngIf=\"p.delPrice\"><span class=\"amount\">{{ p.delPrice }}</span></del>\n\t\t\t\t\t<ins><span class=\"amount\">{{ p.price }}</span></ins>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<a rel=\"nofollow\" href=\"/ng/shop/?add-to-cart={{p.ID}}\" data-quantity=\"1\" [attr.dataProduct_id]=\"p.ID\" data-product_sku=\"\"\n\t\t\t       class=\"button product_type_simple add_to_cart_button ajax_add_to_cart\">Add to cart</a>\n\t\t</li>\n\t</ul>\n\t",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ArchiveComponent);
                return ArchiveComponent;
            })();
            exports_1("ArchiveComponent", ArchiveComponent);
        }
    }
});
//# sourceMappingURL=archive.component.js.map