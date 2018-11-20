"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
/**
 *
 * @param {{schema: JSSchema, connection: Connection}} param0
 * @returns {{[key: string]: Repository<any>}}
 */
exports.getRepositories = ({ schema, connection }) => Object.keys(entities_1.getEntities(schema)).reduce((repositories, entityName) => (Object.assign({}, repositories, { [entityName]: connection.getRepository(entityName) })), {});
//# sourceMappingURL=repositories.js.map