export { default as queryTemplate } from "./dist/src/templates/query";
export { default as mutationTemplate } from "./dist/src/templates/mutation";
export {
  getQueryResolvers,
  getMutationResolvers,
  getRepositories,
  getEntitySchemas
} from "./dist/src/entity";
export {
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne
} from "./dist/src/directives";
