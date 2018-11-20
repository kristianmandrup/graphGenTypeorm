import * as consts from "../../consts";

export const relMap = {
  [consts.ONE_TO_ONE]: "one-to-one",
  [consts.ONE_TO_MANY]: "one-to-many",
  [consts.MANY_TO_ONE]: "many-to-one",
  [consts.MANY_TO_MANY]: "many-to-many"
};

export const getType = field => {
  if (field.directives.hasOwnProperty(consts.PRIMARY_GENERATED_COLUMN)) {
    return "int";
  } else if (field.directives.hasOwnProperty(consts.COLUMN)) {
    if (field.directives[consts.COLUMN].hasOwnProperty("type")) {
      return field.directives[consts.COLUMN].type;
    }
  }
  const typeMap = {
    Int: "int",
    String: "varchar",
    Boolean: "boolean"
  };
  return typeMap[field.type] ? typeMap[field.type] : "varchar";
};

export const getRelType = field => {
  if (field.directives[consts.ONE_TO_ONE]) {
    return "one-to-one";
  } else if (field.directives[consts.ONE_TO_MANY]) {
    return "one-to-many";
  } else if (field.directives[consts.MANY_TO_ONE]) {
    return "many-to-one";
  } else if (field.directives[consts.MANY_TO_MANY]) {
    return "many-to-many";
  } else {
    return false;
  }
};
