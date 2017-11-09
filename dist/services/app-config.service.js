"use strict";
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
    return AppConfigService;
}());
exports.AppConfigService = AppConfigService;
//# sourceMappingURL=app-config.service.js.map