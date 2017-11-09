"use strict";
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
    return FlickityChildDirective;
}());
exports.FlickityChildDirective = FlickityChildDirective;
//# sourceMappingURL=flickity-child.directive.js.map