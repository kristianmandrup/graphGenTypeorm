import * as consts from "../../consts";
import { cond, F, filter, path, pipe, T } from "ramda";
import { fieldIsPrimary } from "../fields";

/** @type {function(Type) => {[key: string]: Field}} */
export const getColumns = pipe(
  path(["fields"]),
  filter(
    cond([
      [fieldIsPrimary, T],
      [path(["directives", consts.COLUMN]), T],
      [F, F]
    ])
  )
);

export const getRelColumns = type =>
  Object.keys(type.fields).reduce((fields, fieldName) => {
    if (type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_ONE)) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_MANY)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_ONE)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_MANY)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    }
    return fields;
  }, {});
