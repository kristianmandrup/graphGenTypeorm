/**
 *
 * @param {Object.<string, Type | Enum>} modelMap
 */
export const getEnums = modelMap => {
  return Object.keys(modelMap).reduce((enumMap, modelKey) => {
    if (
      modelMap[modelKey].type === "Enum" &&
      modelMap[modelKey].directives.EntityEnum
    ) {
      return { ...enumMap, [modelKey]: modelMap[modelKey] };
    }
    return enumMap;
  }, {});
};
