import { Connection } from "typeorm";
import { getEntities } from "./entities";

/**
 *
 * @param {{schema: JSSchema, connection: Connection}} param0
 * @returns {{[key: string]: Repository<any>}}
 */
export const getRepositories = ({ schema, connection }) =>
  Object.keys(getEntities(schema)).reduce(
    (repositories, entityName) => ({
      ...repositories,
      [entityName]: connection.getRepository(entityName)
    }),
    {}
  );
