"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Zero base class
 * @class
 * @constructor
 * @public
 */
class Zero {
    constructor() {
        this.services = {};
    }
    static container() {
        if (!this.instance)
            this.instance = new Zero();
        return this.instance;
    }
    get(name) {
        return this.services[name];
    }
    inject(name, service) {
        this.services[name] = service;
    }
}
exports.default = Zero;
//# sourceMappingURL=index.js.map