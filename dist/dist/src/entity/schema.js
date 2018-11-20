"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("../consts");
const columns_1 = require("./columns");
const entities_1 = require("./entities");
const fields_1 = require("./fields");
const util_1 = require("./util");
/**
 *
 * @param {JSSchema} schema
 * @return {EntitySchemaOptions[]}
 */
exports.getEntitySchemas = schema => Object.keys(entities_1.getEntities(schema)).map(entityKey => exports.getEntitySchema(entityKey, schema[entityKey]), []);
/**
 * @param {string} name
 * @param {Type} type
 */
exports.getEntitySchema = (name, type) => {
    console.log(name, type.directives.Entity.name);
    return {
        name: type.directives.Entity.name || name,
        columns: Object.keys(columns_1.getColumns(type)).reduce((columns, fieldName) => {
            return Object.assign({}, columns, { [fieldName]: Object.assign({}, type.fields[fieldName].directives, { primary: fields_1.isPrimary(fieldName, type), type: fields_1.getType(type.fields[fieldName]), generated: fields_1.isGenerated(fieldName, type), nullable: fields_1.isNullable(fieldName, type) }) });
        }, {}),
        relations: Object.keys(columns_1.getRelColumns(type)).reduce((relationships, fieldName) => {
            const relType = fields_1.getRelType(type.fields[fieldName]);
            const relDirectiveKey = util_1.getKeyByValue(relType, fields_1.relMap);
            const inverseSide = type.fields[fieldName].directives[relDirectiveKey].inverseSide;
            return Object.assign({}, relationships, { [fieldName]: {
                    joinTable: type.fields[fieldName].directives[consts.JOIN_COLUMN]
                        ? true
                        : false,
                    target: type.fields[fieldName].type,
                    cascade: type.fields[fieldName].directives[consts.JOIN_COLUMN]
                        ? true
                        : false,
                    type: relType,
                    inverseSide: inverseSide,
                    lazy: true
                } });
        }, {}),
        uniques: type.directives.Entity.uniques || [],
        checks: type.directives.Entity.checks || [],
        indices: type.directives.Entity.indices || []
    };
};
//# sourceMappingURL=schema.js.map