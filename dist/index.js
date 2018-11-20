"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = require("./dist/src/templates/query");
exports.queryTemplate = query_1.default;
var mutation_1 = require("./dist/src/templates/mutation");
exports.mutationTemplate = mutation_1.default;
var entity_1 = require("./dist/src/entity");
exports.getQueryResolvers = entity_1.getQueryResolvers;
exports.getMutationResolvers = entity_1.getMutationResolvers;
exports.getRepositories = entity_1.getRepositories;
exports.getEntitySchemas = entity_1.getEntitySchemas;
var directives_1 = require("./dist/src/directives");
exports.OneToMany = directives_1.OneToMany;
exports.OneToOne = directives_1.OneToOne;
exports.ManyToMany = directives_1.ManyToMany;
exports.ManyToOne = directives_1.ManyToOne;
//# sourceMappingURL=index.js.map