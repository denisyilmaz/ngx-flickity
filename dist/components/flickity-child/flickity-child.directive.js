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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickity_directive_1 = require("../flickity/flickity.directive");
var FlickityChildDirective = /** @class */ (function () {
    function FlickityChildDirective(el, parent) {
        this.el = el;
        this.parent = parent;
    }
    FlickityChildDirective.prototype.ngOnInit = function () {
        if (!this.parent) {
            return;
        }
        this.parent.append(this.el.nativeElement);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FlickityChildDirective.prototype, "flickityChild", void 0);
    FlickityChildDirective = __decorate([
        core_1.Directive({ selector: '[flickityChild]' }),
        __param(1, core_1.Optional()), __param(1, core_1.Host()),
        __metadata("design:paramtypes", [core_1.ElementRef,
            flickity_directive_1.FlickityDirective])
    ], FlickityChildDirective);
    return FlickityChildDirective;
}());
exports.FlickityChildDirective = FlickityChildDirective;
//# sourceMappingURL=flickity-child.directive.js.map