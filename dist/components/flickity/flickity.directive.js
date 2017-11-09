"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_service_1 = require("../../services/app-config.service");
var FlickityDirective = /** @class */ (function () {
    function FlickityDirective(el, appConfigService) {
        this.el = el;
        this.appConfigService = appConfigService;
        this.config = {};
        this.slideSelect = new core_1.EventEmitter();
        this.cellStaticClick = new core_1.EventEmitter();
        this.childrenUpdated = new core_1.EventEmitter();
        this.appendElements = [];
        this.childrenUpdateInterval = 300;
        this.flickityElement = el.nativeElement;
    }
    FlickityDirective.prototype.ngAfterContentInit = function () {
        // this.init();
        console.log('HI');
    };
    FlickityDirective.prototype.ngOnDestroy = function () {
        // this.destroy();
    };
    __decorate([
        core_1.Input('flickity'),
        __metadata("design:type", Object)
    ], FlickityDirective.prototype, "config", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FlickityDirective.prototype, "slideSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FlickityDirective.prototype, "cellStaticClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FlickityDirective.prototype, "childrenUpdated", void 0);
    FlickityDirective = __decorate([
        core_1.Directive({ selector: '[flickity]' }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            app_config_service_1.AppConfigService])
    ], FlickityDirective);
    return FlickityDirective;
}());
exports.FlickityDirective = FlickityDirective;
//# sourceMappingURL=flickity.directive.js.map