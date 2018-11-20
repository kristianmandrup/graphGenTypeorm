/**
 * @param {Object.<string, Type | Enum>} modelMap
 * @return {Object.<string, Type>}
 */
export const getEntities = modelMap =>
  Object.keys(modelMap).reduce((newModelMap, modelKey) => {
    if (
      modelMap[modelKey].type !== "Enum" &&
      /** @type {Type} */ (modelMap[modelKey].directives["Entity"])
    ) {
      return { ...newModelMap, [modelKey]: modelMap[modelKey] };
    }
    return newModelMap;
  }, {});
