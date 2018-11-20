"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../entity");
const { getIdKey, getId } = entity_1.id;
const { getEntities } = entity_1.entities;
/**
 *
 * @param {string} str
 * @return {string}
 */
exports.lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);
/**
 * @param {string} name
 * @param {Type} entity
 * @return {string}
 */
exports.createQueries = (name, entity) => `
    ${exports.lowerFirst(name)}s: [${name}]
    ${exports.lowerFirst(name)}(${getIdKey(entity.fields)}: ${getId(entity.fields).type}) : ${name}
`;
/**
 * @param {Object.<string, Type | Enum>} entities
 * @returns {string}
 */
exports.default = entities => `
type Query {
${Object.keys(getEntities(entities))
    .map(entityKey => exports.createQueries(entityKey, entities[entityKey]))
    .join("\n")}
}
`;
//# sourceMappingURL=query.js.map