"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {JSSchema} schema
 * @returns {QueryResolvers}
 */
exports.getQueryResolvers = schema => ({
    Query: Object.keys(getEntities(schema)).reduce((queries, entityName) => (Object.assign({}, queries, { [lowerFirst(entityName + "s")](root, args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield context.repositories[entityName].find();
            });
        },
        [lowerFirst(entityName)](root, { id }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield context.repositories[entityName].findOne(id);
            });
        } })), {})
});
//# sourceMappingURL=query.js.map