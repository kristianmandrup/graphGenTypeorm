const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");

export class OneToOne extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (obj, args, context) => {
      return await obj[field.name];
    };
  }
}

export class OneToMany extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (obj, args, context) => {
      return await obj[field.name];
    };
  }
}

export class ManyToOne extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (obj, args, context) => {
      return await obj[field.name];
    };
  }
}

export class ManyToMany extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (obj, args, context) => {
      return await obj[field.name];
    };
  }
}
