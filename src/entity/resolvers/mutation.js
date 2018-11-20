/**
 *
 * @param {JSSchema} schema
 * @returns {MutationResolvers}
 */
export const getMutationResolvers = schema => ({
  Mutation: Object.keys(getEntities(schema)).reduce(
    (mutations, entityName) => ({
      ...mutations,

      async [`create${entityName}`](root, { data }, context) {
        const repository = context.repositories[entityName];
        const obj = repository.create(data);
        return await repository.save(obj);
      },
      async [`update${entityName}`](
        root,
        {
          data: { id, ...updates }
        },
        context
      ) {
        const repository = context.repositories[entityName];
        const obj = await repository.findOne(id);
        //Object.setPrototypeOf(updates, {})
        for (const key in updates) {
          Object.setPrototypeOf(updates[key], {});
          obj[key] = updates[key];
        }
        //const updated = await repository.save(Object.assign(obj, data))
        const foo = await repository.save(obj);
        return await repository.findOne(id);
      },
      async [`delete${entityName}`](root, { id }, context) {
        const result = await context.repositories[entityName].delete(id);
        return id;
      }
    }),
    {}
  )
});
