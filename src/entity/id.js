/**
 *
 * @param {Object.<string, Field>} fields
 * @return {string}
 */
export const getIdKey = fields =>
  Object.keys(fields).find(fieldKey => {
    if (fields[fieldKey].directives[consts.PRIMARY_GENERATED_COLUMN]) {
      return true;
    }
  });
/**
 * @function
 * @param {Object.<string, Field>} fields
 * @return {Field}
 */
export const getId = fields => fields[getIdKey(fields)];
