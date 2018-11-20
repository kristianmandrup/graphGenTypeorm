"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {string} str
 * @return {string}
 */
exports.lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);
exports.getKeyByValue = (value, object) => {
    return Object.keys(object).find(key => object[key] === value);
};
//# sourceMappingURL=util.js.map