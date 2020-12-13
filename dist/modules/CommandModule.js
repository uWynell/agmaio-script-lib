"use strict";
exports.__esModule = true;
exports.CommandModule = void 0;
var CommandModule = /** @class */ (function () {
    function CommandModule(core) {
        this.core = core;
        this.commands = [];
    }
    CommandModule.prototype.addCommand = function (command) {
        var conflict = false;
        for (var i = 0; i < this.commands.length; i++) {
            var cmd = this.commands[i];
            if (cmd.name === command.name) {
                conflict = true;
                return this.core.LoggerModule.error("Command with name " + cmd.name + " already exists.");
            }
        }
        if (!conflict)
            this.commands.push(command);
    };
    CommandModule.prototype.removeCommand = function (name) {
        for (var i = 0; i < this.commands.length; i++) {
            var cmd = this.commands[i];
            if (cmd.name === name) {
                this.commands.splice(i, 1);
            }
        }
    };
    CommandModule.prototype.getCommand = function (name) {
        var found = false;
        for (var i = 0; i < this.commands.length; i++) {
            var command = this.commands[i];
            if (command.name === name) {
                found = true;
                return command;
            }
        }
        if (!found) {
            for (var i = 0; i < this.commands.length; i++) {
                var command = this.commands[i];
                if (command.aliases && command.aliases.includes(name)) {
                    return command;
                }
            }
        }
    };
    return CommandModule;
}());
exports.CommandModule = CommandModule;
