import { getValueFromStringAfterSeparator } from "./utilsForString.js";

const getCliArgByKey = (key, args) => {
  const targetArg = args.find((arg) => arg.includes(key));
  if (targetArg) {
    return getValueFromStringAfterSeparator(targetArg, "=");
  }
  return 'stranger';
};

export default getCliArgByKey;
