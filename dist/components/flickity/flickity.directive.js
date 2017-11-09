"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickity_options_interface_1 = require("../../interfaces/flickity-options.interface");
var app_config_service_1 = require("../../services/app-config.service");
var FlickityDirective = /** @class */ (function () {
    function FlickityDirective(el, appConfigService) {
        this.el = el;
        this.appConfigService = appConfigService;
        this.flickityElement = el.nativeElement;
    }
    FlickityDirective.prototype.ngAfterContentInit = function () {
        this.init();
    };
    FlickityDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    FlickityDirective.prototype.init = function () {
        var _this = this;
        if (this.appConfigService.isPlatformServer || !this.flickityElement) {
            return;
        }
        var Flickity = require('flickity');
        var config = this.config;
        if (this.flkty) {
            config['initialIndex'] = this.flkty.selectedIndex;
            this.destroy();
        }
        this.flkty = new Flickity(this.flickityElement, config);
        this.flkty.on('select', function () {
            _this.slideSelect.emit(_this.selectedIndex);
        });
        this.flkty.on('staticClick', function (_event, _pointer, _cellElement, cellIndex) {
            _this.cellStaticClick.emit(cellIndex);
        });
        this.updateElements();
        setTimeout(function () { return _this.resize(); }, this.childrenUpdateInterval);
    };
    FlickityDirective.prototype.destroy = function () {
        if (!this.flkty) {
            return;
        }
        if (this.childrenUpdate) {
            clearInterval(this.childrenUpdate);
            this.childrenUpdate = undefined;
        }
        this.flkty.destroy();
    };
    FlickityDirective.prototype.resize = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.resize();
    };
    FlickityDirective.prototype.reposition = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.reposition();
    };
    FlickityDirective.prototype.previous = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.previous();
    };
    FlickityDirective.prototype.previousAvailable = function () {
        if (this.selectedIndex === undefined) {
            return false;
        }
        return this.selectedIndex > 0;
    };
    FlickityDirective.prototype.next = function () {
        if (!this.flkty) {
            return;
        }
        this.flkty.next();
    };
    FlickityDirective.prototype.nextAvailable = function () {
        if (this.selectedIndex === undefined || !this.slides) {
            return false;
        }
        return this.selectedIndex < this.slides - 1;
    };
    Object.defineProperty(FlickityDirective.prototype, "selectedIndex", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlickityDirective.prototype, "cells", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty.cells.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlickityDirective.prototype, "slides", {
        get: function () {
            if (!this.flkty) {
                return;
            }
            return this.flkty['slides'].length;
        },
        enumerable: true,
        configurable: true
    });
    FlickityDirective.prototype.append = function (el) {
        this.appendElements.push(el);
    };
    FlickityDirective.prototype.prepend = function (el) {
        this.flkty.prepend(el);
    };
    FlickityDirective.prototype.updateElements = function () {
        var _this = this;
        if (!this.flkty || this.appendElements.length == 0) {
            return;
        }
        this.appendElements.forEach(function (el) {
            _this.flkty.append(el);
        });
        this.appendElements = [];
        this.resize();
        this.childrenUpdated.emit();
        this.childrenUpdate = setTimeout(this.updateElements(), this.childrenUpdateInterval);
    };
    FlickityDirective.prototype.select = function (index, isWrapped, isInstant) {
        if (isWrapped === void 0) { isWrapped = true; }
        if (isInstant === void 0) { isInstant = false; }
        this.flkty.select(index, isWrapped, isInstant);
    };
    return FlickityDirective;
}());
exports.FlickityDirective = FlickityDirective;
//# sourceMappingURL=flickity.directive.js.map