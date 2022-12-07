import subscribeCallbackOnCommand from "./subscribeCallbackOnProcess.js";
import { getDirname, getFileNameAndDirname } from "./getDir.js";
import { getMsgWithCurrentPath, greetUser } from "./greet.js";
import getCLIArgs from "./getCLIArgs.js";
import { fsErrorMsg, operationErrMsg, unknownInput } from "./contants.js";
import getCliArgByKey from "./getCliArgByKey.js";
import {
  getValueFromStringAfterSeparator,
  removeExtraSpaces,
} from "./utilsForString.js";
import isInputFileAndIsOutputIsDir from "./isInputFileAndIsOutputIsDir.js";
import buildPathForOutputFile from "./buildPathForOutputFile.js";
import replaceFileExtension from "./replaceFileExtension.js";

export {
  buildPathForOutputFile,
  replaceFileExtension,
  isInputFileAndIsOutputIsDir,
  getCliArgByKey,
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
