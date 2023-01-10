const removeExtraSpaces = (string) =>
  string.toString().replace(/\s+/g, " ").trim();

const getValueFromStringAfterSeparator = (string, separator) =>
  string.slice(string.indexOf(separator) + 1);

const isSlashAtTheEndOfPath = (path) => (path.lastIndexOf('/') !== -1 ? path : path + "/");

export { removeExtraSpaces, getValueFromStringAfterSeparator, isSlashAtTheEndOfPath };
