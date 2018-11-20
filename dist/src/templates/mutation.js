"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fields_1 = require("../entity/fields");
const columns_1 = require("../entity/columns");
const entities_1 = require("../entity/entities");
const column_1 = require("../column");
/**
 *
 * @param {Field} field
 * @param {boolean} create
 * @return {string}
 */
exports.fieldType = (field, create = true) => `${field.isList ? "[" : ""}Update${field.type}Input${field.isList ? "]" : ""}`;
/**
 * @function
 * @param {Field} field
 * @param {boolean} create
 * @return {boolean}
 */
exports.isRequired = (field, create = true) => {
    if (fields_1.fieldIsPrimary(field) && create) {
        return false;
    }
    else if (fields_1.fieldIsPrimary(field)) {
        return true;
    }
    if (!field.isNullable && create) {
        return true;
    }
    return false;
};
/**
 * @function
 * @param {Field} field
 * @param {boolean} create
 * @return {string}
 */
exports.fieldRequired = (field, create = true) => exports.isRequired(field, create) ? "!" : "";
/**
 * @function
 * @param {string} name
 * @param {Field} field
 * @param {boolean} create
 * @return {string}
 */
exports.createMutationInputField = (name, field, create = true) => `    ${name}: ${exports.fieldType(field, create)}${exports.fieldRequired(field, create)}`;
/**
 * @function
 * @param {string} name
 * @param {Object.<string, Type | Enum>} types
 * @return {string}
 */
exports.createMutationInputs = (name, types) => `
input Create${name}Input {
${Object.keys(columns_1.getColumns(types[name]))
    .filter(fieldKey => !column_1.isAutoGenerated(types[name].fields[fieldKey]))
    .map(fieldKey => `    ${fieldKey}: ${types[name].fields[fieldKey].type}${exports.fieldRequired(types[name].fields[fieldKey], true)}`)
    .join("\n")}
${Object.keys(columns_1.getRelColumns(types[name]))
    .map(fieldKey => exports.createMutationInputField(fieldKey, types[name].fields[fieldKey]))
    .join("\n")}
}`;
/**
 * @function
 * @param {string} name
 * @param {Object.<string, Type | Enum>} types
 * @return {string}
 */
exports.updateMutationInputs = (name, types) => `
input Update${name}Input {
${Object.keys(columns_1.getColumns(types[name]))
    .map(fieldKey => `    ${fieldKey}: ${types[name].fields[fieldKey].type}${exports.fieldRequired(types[name].fields[fieldKey], false)}`)
    .join("\n")}
${Object.keys(columns_1.getRelColumns(types[name]))
    .map(fieldKey => exports.createMutationInputField(fieldKey, types[name].fields[fieldKey], false))
    .join("\n")}
}`;
/**
 * @function
 * @param {string} name
 * @param {Type} model
 * @return {string}
 */
exports.createMutation = (name, model) => `
    create${name}(data: Create${name}Input): ${name}
    update${name}(data: Update${name}Input): ${name}
    delete${name}(id: Int): Int`;
exports.default = (/** @type {Object.<string, Type | Enum>} */ types) => `
${Object.keys(entities_1.getEntities(types))
    .map(typeKey => exports.createMutationInputs(typeKey, types))
    .join("\n")}
${Object.keys(entities_1.getEntities(types))
    .map(typeKey => exports.updateMutationInputs(typeKey, types))
    .join("\n")}

type Mutation {
${Object.keys(entities_1.getEntities(types))
    .map(typeKey => exports.createMutation(typeKey, /** @type {Type} */ (types[typeKey])))
    .join("\n")}
}
`;
//# sourceMappingURL=mutation.js.map