export const getRelColumns = type =>
  Object.keys(type.fields).reduce((fields, fieldName) => {
    if (type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_ONE)) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.ONE_TO_MANY)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_ONE)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    } else if (
      type.fields[fieldName].directives.hasOwnProperty(consts.MANY_TO_MANY)
    ) {
      return { ...fields, [fieldName]: type.fields[fieldName] };
    }
    return fields;
  }, {});
