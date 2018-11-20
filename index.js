export { default as queryTemplate } from "./dist/templates/query";
export { default as mutationTemplate } from "./dist/templates/mutation";
export {
  getQueryResolvers,
  getMutationResolvers,
  getRepositories,
  getEntitySchemas
} from "./dist/entity";
export { OneToMany, OneToOne, ManyToMany, ManyToOne } from "./dist/directives";
