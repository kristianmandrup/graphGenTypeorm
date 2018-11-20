/**
 *
 * @param {string} str
 * @return {string}
 */
export const lowerFirst = str => str.charAt(0).toLowerCase() + str.slice(1);

export const getKeyByValue = (value, object) => {
  return Object.keys(object).find(key => object[key] === value);
};
