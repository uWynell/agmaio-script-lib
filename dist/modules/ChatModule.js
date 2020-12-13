"use strict";
exports.__esModule = true;
exports.ChatModule = void 0;
var ChatModule = /** @class */ (function () {
    function ChatModule(core) {
        var _this = this;
        this.core = core;
        this.element = document.querySelector(core.config.element);
        this.utils = {
            get: function () { return _this.element.value; },
            set: function (val) { return _this.element.value = val; },
            clear: function () { return _this.element.value = ''; }
        };
        this.init();
    }
    ChatModule.prototype.init = function () {
        var _this = this;
        this.element.onkeydown = function (e) {
            if (e.key === 'Enter') {
                var msg = _this.element.value;
                var prefix = _this.core.config.prefix;
                if (msg.startsWith(prefix)) {
                    msg = msg.slice(prefix.length).split(' ');
                    var cmd = msg.shift();
                    var args = msg;
                    var command = _this.core.CommandModule.getCommand(cmd);
                    if (command && !command.disabled) {
                        command.run(_this.core, args, _this.utils);
                    }
                }
            }
        };
    };
    return ChatModule;
}());
exports.ChatModule = ChatModule;
