"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("../../consts");
const ramda_1 = require("ramda");
const fields_1 = require("../fields");
/** @type {function(Type) => {[key: string]: Field}} */
exports.getColumns = ramda_1.pipe(ramda_1.path(["fields"]), ramda_1.filter(ramda_1.cond([
    [fields_1.fieldIsPrimary, ramda_1.T],
    [ramda_1.path(["directives", consts.COLUMN]), ramda_1.T],
    [ramda_1.F, ramda_1.F]
])));
exports.getRelColumns = type => Object.keys(type.fields).reduce((fields, fieldName) => {
    if (type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_ONE)) {
        return Object.assign({}, fields, { [fieldName]: type.fields[fieldName] });
    }
    else if (type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_MANY)) {
        return Object.assign({}, fields, { [fieldName]: type.fields[fieldName] });
    }
    else if (type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_ONE)) {
        return Object.assign({}, fields, { [fieldName]: type.fields[fieldName] });
    }
    else if (type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_MANY)) {
        return Object.assign({}, fields, { [fieldName]: type.fields[fieldName] });
    }
    return fields;
}, {});
//# sourceMappingURL=index.js.map