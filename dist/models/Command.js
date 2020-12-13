"use strict";
exports.__esModule = true;
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(config) {
        this.name = config.name;
        this.aliases = config.aliases;
        this.disabled = config.disabled;
        this.run = config.run;
    }
    return Command;
}());
exports.Command = Command;
