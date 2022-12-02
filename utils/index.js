import subscribeCallbackOnCommand from "./subscribeCallbackOnProcess.js";
import { getDirname, getFileNameAndDirname } from "./getDir.js";
import { getMsgWithCurrentPath, greetUser } from "./greet.js";
import getCLIArgs from "./getCLIArgs.js";
import { fsErrorMsg, operationErrMsg, unknownInput } from "./contants.js";
import {
  getValueFromStringAfterSeparator,
  removeExtraSpaces,
} from "./utilsForString.js";

export {
  subscribeCallbackOnCommand,
  getFileNameAndDirname,
  getDirname,
  getValueFromStringAfterSeparator,
  removeExtraSpaces,
  greetUser,
  getMsgWithCurrentPath,
  getCLIArgs,
  operationErrMsg,
  unknownInput,
  fsErrorMsg,
};
