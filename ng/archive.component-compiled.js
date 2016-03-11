"use strict";

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @developer wpdevelopment.me <shramee@wpdvelopment.me>
 */
var core_1 = require('angular2/core');
require('rxjs/Rx');
var ArchiveComponent = function () {
    function ArchiveComponent(_http) {
        this._http = _http;
    }
    ArchiveComponent.prototype.getHeroes = function () {
        return this._http.get().map(function (res) {
            return res.json().data;
        }).do(function (data) {
            return console.log(data);
        }) // eyeball results in the console
        .catch(this.handleError);
    };
    ArchiveComponent.prototype.ngOnInit = function () {
        //this.getHeroes();
    };
    ArchiveComponent.prototype.handleError = function () {
        //this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    ArchiveComponent = __decorate([core_1.Component({
        selector: 'fs-product-archive',
        templateUrl: fsl10n.url + '/ng/tpl/archive.html'
    })], ArchiveComponent);
    return ArchiveComponent;
}();
exports.ArchiveComponent = ArchiveComponent;
//# sourceMappingURL=archive.component.js.map

//# sourceMappingURL=archive.component-compiled.js.map