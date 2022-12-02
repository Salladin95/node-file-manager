const removeExtraSpaces = (string) =>
  string.toString().replace(/\s+/g, " ").trim();

const getValueFromStringAfterSeparator = (string, separator) =>
  string.slice(string.indexOf(separator) + 1);

export { removeExtraSpaces, getValueFromStringAfterSeparator };
