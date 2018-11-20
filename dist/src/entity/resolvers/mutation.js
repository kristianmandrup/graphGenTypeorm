"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {JSSchema} schema
 * @returns {MutationResolvers}
 */
exports.getMutationResolvers = schema => ({
    Mutation: Object.keys(getEntities(schema)).reduce((mutations, entityName) => (Object.assign({}, mutations, { [`create${entityName}`](root, { data }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const repository = context.repositories[entityName];
                const obj = repository.create(data);
                return yield repository.save(obj);
            });
        },
        [`update${entityName}`](root, _a, context) {
            var _b = _a.data, { id } = _b, updates = __rest(_b, ["id"]);
            return __awaiter(this, void 0, void 0, function* () {
                const repository = context.repositories[entityName];
                const obj = yield repository.findOne(id);
                //Object.setPrototypeOf(updates, {})
                for (const key in updates) {
                    Object.setPrototypeOf(updates[key], {});
                    obj[key] = updates[key];
                }
                //const updated = await repository.save(Object.assign(obj, data))
                const foo = yield repository.save(obj);
                return yield repository.findOne(id);
            });
        },
        [`delete${entityName}`](root, { id }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield context.repositories[entityName].delete(id);
                return id;
            });
        } })), {})
});
//# sourceMappingURL=mutation.js.map