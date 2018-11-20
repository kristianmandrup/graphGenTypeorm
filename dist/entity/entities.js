"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Object.<string, Type | Enum>} modelMap
 * @return {Object.<string, Type>}
 */
exports.getEntities = modelMap => Object.keys(modelMap).reduce((newModelMap, modelKey) => {
    if (modelMap[modelKey].type !== "Enum" &&
        /** @type {Type} */ (modelMap[modelKey].directives["Entity"])) {
        return Object.assign({}, newModelMap, { [modelKey]: modelMap[modelKey] });
    }
    return newModelMap;
}, {});
//# sourceMappingURL=entities.js.map