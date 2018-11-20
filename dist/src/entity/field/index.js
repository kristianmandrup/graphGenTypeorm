"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const consts = require("../../consts");
/** @type {function(string, Type) => Field} */
exports.getField = ramda_1.curry((fieldName, type) => type.fields[fieldName]);
/** @type {function(Field) => boolean} */
exports.fieldIsPrimary = ramda_1.ifElse(path(["directives", consts.PRIMARY_GENERATED_COLUMN]), T, F);
//# sourceMappingURL=index.js.map