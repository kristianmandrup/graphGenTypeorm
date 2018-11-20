"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const consts = require("../../consts");
var type_1 = require("./type");
exports.getRelType = type_1.getRelType;
exports.getType = type_1.getType;
exports.relMap = type_1.relMap;
/** @type {function(string, Type) => Field} */
exports.getField = ramda_1.curry((fieldName, type) => type.fields[fieldName]);
/** @type {function(Field) => boolean} */
exports.fieldIsPrimary = ramda_1.ifElse(ramda_1.path(["directives", consts.PRIMARY_GENERATED_COLUMN]), ramda_1.T, ramda_1.F);
/** @type {function(Field) => boolean} */
exports.fieldIsNullable = ramda_1.prop("isNullable");
/** @type {function(Field) => boolean} */
exports.fieldIsGenerated = ramda_1.ifElse(exports.fieldIsPrimary, ramda_1.T, ramda_1.ifElse(ramda_1.path(["directives", consts.GENERATED]), ramda_1.T, ramda_1.F));
/** @type {function(string, Type) => boolean} */
exports.isPrimary = ramda_1.pipe(exports.getField, exports.fieldIsPrimary);
/** @type {function(string, Type) => boolean} */
exports.isGenerated = ramda_1.pipe(exports.getField, exports.fieldIsGenerated);
/** @type {function(string, Type) => boolean} */
exports.isNullable = ramda_1.pipe(exports.getField, exports.fieldIsNullable);
//# sourceMappingURL=index.js.map