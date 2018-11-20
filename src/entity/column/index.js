/** @type {function(Field) => boolean} */
export const fieldIsNullable = prop("isNullable");

/** @type {function(Field) => boolean} */
export const fieldIsGenerated = ifElse(
  fieldIsPrimary,
  T,
  ifElse(path(["directives", consts.GENERATED]), T, F)
);

/** @type {function(string, Type) => boolean} */
export const isPrimary = pipe(
  getField,
  fieldIsPrimary
);
/** @type {function(string, Type) => boolean} */
export const isGenerated = pipe(
  getField,
  fieldIsGenerated
);
/** @type {function(string, Type) => boolean} */
export const isNullable = pipe(
  getField,
  fieldIsNullable
);

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
