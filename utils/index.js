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
import {
  buildPathForOutputFile,
  buildPathForOutputFileWithoutExtension,
} from "./buildPathForOutputFile.js";
import replaceFileExtension from "./replaceFileExtension.js";
import checkArrLength from "./checkArrLength.js";
import isFile from "./isFile.js";
import isDir from "./isDir.js";
import isCurrentDirEqualTargetDir from "./isCurrentDirEqualTargetDir.js";

export {
  isCurrentDirEqualTargetDir,
  isFile,
  isDir,
  checkArrLength,
  buildPathForOutputFile,
  buildPathForOutputFileWithoutExtension,
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
