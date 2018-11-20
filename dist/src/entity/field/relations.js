"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("../../consts");
exports.relMap = {
    [consts.ONE_TO_ONE]: "one-to-one",
    [consts.ONE_TO_MANY]: "one-to-many",
    [consts.MANY_TO_ONE]: "many-to-one",
    [consts.MANY_TO_MANY]: "many-to-many"
};
exports.getRelType = field => {
    if (field.directives[consts.ONE_TO_ONE]) {
        return "one-to-one";
    }
    else if (field.directives[consts.ONE_TO_MANY]) {
        return "one-to-many";
    }
    else if (field.directives[consts.MANY_TO_ONE]) {
        return "many-to-one";
    }
    else if (field.directives[consts.MANY_TO_MANY]) {
        return "many-to-many";
    }
    else {
        return false;
    }
};
//# sourceMappingURL=relations.js.map