"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {function(Field) => boolean} */
exports.fieldIsNullable = prop("isNullable");
/** @type {function(Field) => boolean} */
exports.fieldIsGenerated = ifElse(fieldIsPrimary, T, ifElse(path(["directives", consts.GENERATED]), T, F));
/** @type {function(string, Type) => boolean} */
exports.isPrimary = pipe(getField, fieldIsPrimary);
/** @type {function(string, Type) => boolean} */
exports.isGenerated = pipe(getField, exports.fieldIsGenerated);
/** @type {function(string, Type) => boolean} */
exports.isNullable = pipe(getField, exports.fieldIsNullable);
/** @type {function(Type) => {[key: string]: Field}} */
exports.getColumns = pipe(path(["fields"]), filter(cond([
    [fieldIsPrimary, T],
    [path(["directives", consts.COLUMN]), T],
    [F, F]
])));
//# sourceMappingURL=index.js.map