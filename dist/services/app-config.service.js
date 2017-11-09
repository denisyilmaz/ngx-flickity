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
var common_1 = require("@angular/common");
var AppConfigService = /** @class */ (function () {
    function AppConfigService(platformId) {
        this.platformId = platformId;
    }
    Object.defineProperty(AppConfigService.prototype, "isPlatformServer", {
        get: function () {
            if (!this._isPlatformServer) {
                this._isPlatformServer = common_1.isPlatformServer(this.platformId);
            }
            return this._isPlatformServer;
        },
        enumerable: true,
        configurable: true
    });
    AppConfigService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [Object])
    ], AppConfigService);
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=app-config.service.js.map