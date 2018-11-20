import * as consts from "../consts";
import { getColumns, getRelColumns } from "./columns";
import { getEntities } from "./entities";
import {
  isPrimary,
  isGenerated,
  isNullable,
  getType,
  getRelType,
  relMap
} from "./fields";
import { getKeyByValue } from "./util";
/**
 *
 * @param {JSSchema} schema
 * @return {EntitySchemaOptions[]}
 */
export const getEntitySchemas = schema =>
  Object.keys(getEntities(schema)).map(
    entityKey => getEntitySchema(entityKey, schema[entityKey]),
    []
  );

/**
 * @param {string} name
 * @param {Type} type
 */
export const getEntitySchema = (name, type) => {
  console.log(name, type.directives.Entity.name);
  return {
    name: type.directives.Entity.name || name,
    columns: Object.keys(getColumns(type)).reduce((columns, fieldName) => {
      return {
        ...columns,
        [fieldName]: {
          ...type.fields[fieldName].directives,
          primary: isPrimary(fieldName, type),
          type: getType(type.fields[fieldName]),
          generated: isGenerated(fieldName, type),
          nullable: isNullable(fieldName, type)
        }
      };
    }, {}),
    relations: Object.keys(getRelColumns(type)).reduce(
      (relationships, fieldName) => {
        const relType = getRelType(type.fields[fieldName]);
        const relDirectiveKey = getKeyByValue(relType, relMap);
        const inverseSide =
          type.fields[fieldName].directives[relDirectiveKey].inverseSide;

        return {
          ...relationships,
          [fieldName]: {
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
          }
        };
      },
      {}
    ),
    uniques: type.directives.Entity.uniques || [],
    checks: type.directives.Entity.checks || [],
    indices: type.directives.Entity.indices || []
  };
};
