"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Core = void 0;
var modules_1 = require("./modules");
var defaults_1 = __importDefault(require("./defaults"));
var Core = /** @class */ (function () {
    function Core(config) {
        this.config = __assign(__assign({}, defaults_1["default"]), config);
        this.CommandModule = new modules_1.CommandModule(this);
        this.ChatModule = new modules_1.ChatModule(this);
        this.LoggerModule = new modules_1.LoggerModule(this);
    }
    return Core;
}());
exports.Core = Core;
