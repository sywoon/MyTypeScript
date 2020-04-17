"use strict";
var log;
(function (log) {
    log.modelsOpen = {};
    log.any2str = (msg) => {
        if (typeof msg === "object") {
            return JSON.stringify(msg);
        }
        else {
            return String(msg);
        }
    };
    log.i = (...args) => {
        for (var i = 0; i < args.length; i++) {
            let msg = args[i];
            console.log(log.any2str(msg));
        }
    };
    log.d = (msg) => {
        log.i(msg);
        console.trace();
    };
})(log || (log = {}));
//# sourceMappingURL=logger.js.map