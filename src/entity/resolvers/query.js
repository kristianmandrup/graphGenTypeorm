/**
 *
 * @param {JSSchema} schema
 * @returns {QueryResolvers}
 */
export const getQueryResolvers = schema => ({
  Query: Object.keys(getEntities(schema)).reduce(
    (queries, entityName) => ({
      ...queries,
      async [lowerFirst(entityName + "s")](root, args, context) {
        return await context.repositories[entityName].find();
      },
      async [lowerFirst(entityName)](root, { id }, context) {
        return await context.repositories[entityName].findOne(id);
      }
    }),
    {}
  )
});
