import * as consts from "../consts";
import {
  cond,
  curry,
  F,
  filter,
  ifElse,
  path,
  pathOr,
  pipe,
  prop,
  T
} from "ramda";
import { Connection, Repository } from "typeorm";
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";

/**
 *
 * @param {string} str
 * @return {string}
 */
export const lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);

export const getKeyByValue = (value, object) => {
  return Object.keys(object).find(key => object[key] === value);
};

export const relMap = {
  [consts.ONE_TO_ONE]: "one-to-one",
  [consts.ONE_TO_MANY]: "one-to-many",
  [consts.MANY_TO_ONE]: "many-to-one",
  [consts.MANY_TO_MANY]: "many-to-many"
};

export const getRelType = field => {
  if (field.directives[consts.ONE_TO_ONE]) {
    return "one-to-one";
  } else if (field.directives[consts.ONE_TO_MANY]) {
    return "one-to-many";
  } else if (field.directives[consts.MANY_TO_ONE]) {
    return "many-to-one";
  } else if (field.directives[consts.MANY_TO_MANY]) {
    return "many-to-many";
  } else {
    return false;
  }
};

/** @type {function(string, Type) => Field} */
export const getField = curry((fieldName, type) => type.fields[fieldName]);

/** @type {function(Field) => boolean} */
export const fieldIsPrimary = ifElse(
  path(["directives", consts.PRIMARY_GENERATED_COLUMN]),
  T,
  F
);
