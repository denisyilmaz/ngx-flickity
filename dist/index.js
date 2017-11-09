"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flickity_directive_1 = require("./components/flickity/flickity.directive");
var flickity_child_directive_1 = require("./components/flickity-child/flickity-child.directive");
var flickity_options_interface_1 = require("./interfaces/flickity-options.interface");
exports.FlickityOptions = flickity_options_interface_1.FlickityOptions;
var flickity_directive_2 = require("./components/flickity/flickity.directive");
exports.FlickityDirective = flickity_directive_2.FlickityDirective;
var flickity_child_directive_2 = require("./components/flickity-child/flickity-child.directive");
exports.FlickityChildDirective = flickity_child_directive_2.FlickityChildDirective;
var flickity_module_1 = require("./flickity.module");
exports.FlickityModule = flickity_module_1.FlickityModule;
exports.FLICKITY_DIRECTIVES = [
    flickity_directive_1.FlickityDirective,
    flickity_child_directive_1.FlickityChildDirective
];
//# sourceMappingURL=index.js.map