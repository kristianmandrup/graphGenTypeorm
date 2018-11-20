"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {Object.<string, Type | Enum>} modelMap
 */
exports.getEnums = modelMap => {
    return Object.keys(modelMap).reduce((enumMap, modelKey) => {
        if (modelMap[modelKey].type === "Enum" &&
            modelMap[modelKey].directives.EntityEnum) {
            return Object.assign({}, enumMap, { [modelKey]: modelMap[modelKey] });
        }
        return enumMap;
    }, {});
};
//# sourceMappingURL=enums.js.map