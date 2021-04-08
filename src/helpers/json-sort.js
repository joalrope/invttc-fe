export const jsonSort = (json, template) => {
  const result = {};

  template.forEach((key) => {
    if (json.hasOwnProperty(key)) result[key] = json[key];
  });
  return result;
};
