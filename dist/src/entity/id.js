"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("../consts");
/**
 *
 * @param {Object.<string, Field>} fields
 * @return {string}
 */
exports.getIdKey = fields => Object.keys(fields).find(fieldKey => {
    if (fields[fieldKey].directives[consts.PRIMARY_GENERATED_COLUMN]) {
        return true;
    }
});
/**
 * @function
 * @param {Object.<string, Field>} fields
 * @return {Field}
 */
exports.getId = fields => fields[exports.getIdKey(fields)];
//# sourceMappingURL=id.js.map