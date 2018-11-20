"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=relation-columns.js.map