"use strict";
exports.__esModule = true;
exports.LoggerModule = void 0;
var LoggerModule = /** @class */ (function () {
    function LoggerModule(core) {
        this.core = core;
    }
    LoggerModule.prototype.log = function (message) {
        if (message === void 0) { message = ''; }
        if (!this.core.config.silent)
            return console.log("[Core Log]: " + message);
    };
    LoggerModule.prototype.warn = function (message) {
        if (message === void 0) { message = ''; }
        if (!this.core.config.silent)
            return console.warn("[Core Warn]: " + message);
    };
    LoggerModule.prototype.error = function (message) {
        if (message === void 0) { message = ''; }
        if (!this.core.config.silent)
            return console.error("[Core Error]: " + message);
    };
    return LoggerModule;
}());
exports.LoggerModule = LoggerModule;
