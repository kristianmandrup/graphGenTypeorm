"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("../consts");
exports.getType = field => {
    if (field.directives.hasOwnProperty(consts.PRIMARY_GENERATED_COLUMN)) {
        return "int";
    }
    else if (field.directives.hasOwnProperty(consts.COLUMN)) {
        if (field.directives[consts.COLUMN].hasOwnProperty("type")) {
            return field.directives[consts.COLUMN].type;
        }
    }
    const typeMap = {
        Int: "int",
        String: "varchar",
        Boolean: "boolean"
    };
    return typeMap[field.type] ? typeMap[field.type] : "varchar";
};
//# sourceMappingURL=type.js.map