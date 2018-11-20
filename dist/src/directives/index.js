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
const { SchemaDirectiveVisitor } = require("apollo-server");
class OneToOne extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        field.resolve = (obj, args, context) => __awaiter(this, void 0, void 0, function* () {
            return yield obj[field.name];
        });
    }
}
exports.OneToOne = OneToOne;
class OneToMany extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        field.resolve = (obj, args, context) => __awaiter(this, void 0, void 0, function* () {
            return yield obj[field.name];
        });
    }
}
exports.OneToMany = OneToMany;
class ManyToOne extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        field.resolve = (obj, args, context) => __awaiter(this, void 0, void 0, function* () {
            return yield obj[field.name];
        });
    }
}
exports.ManyToOne = ManyToOne;
class ManyToMany extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        field.resolve = (obj, args, context) => __awaiter(this, void 0, void 0, function* () {
            return yield obj[field.name];
        });
    }
}
exports.ManyToMany = ManyToMany;
//# sourceMappingURL=index.js.map