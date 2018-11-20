import { pipe, prop, path, T, F, curry, ifElse } from "ramda";
import * as consts from "../../consts";
export { getRelType, getType, relMap } from "./type";

type FieldCheckFn = (Field) => boolean;
type IsFn = (string, Type) => boolean;

/** @type {function(string, Type) => Field} */
export const getField = curry(
  (fieldName: string, type: any) => type.fields[fieldName]
);

/** @type {function(Field) => boolean} */
export const fieldIsPrimary: FieldCheckFn = ifElse(
  path(["directives", consts.PRIMARY_GENERATED_COLUMN]),
  T,
  F
);

/** @type {function(Field) => boolean} */
export const fieldIsNullable: FieldCheckFn = prop("isNullable");

/** @type {function(Field) => boolean} */
export const fieldIsGenerated: FieldCheckFn = ifElse(
  fieldIsPrimary,
  T,
  ifElse(path(["directives", consts.GENERATED]), T, F)
);

/** @type {function(string, Type) => boolean} */
export const isPrimary: IsFn = pipe(
  getField,
  fieldIsPrimary
);
/** @type {function(string, Type) => boolean} */
export const isGenerated: IsFn = pipe(
  getField,
  fieldIsGenerated
);
/** @type {function(string, Type) => boolean} */
export const isNullable: IsFn = pipe(
  getField,
  fieldIsNullable
);
