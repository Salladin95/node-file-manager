import {
  copyFile,
  createFile,
  moveFile,
  readAndPrintFile,
  removeFile,
  renameFile,
} from "./index.js";

import {
  buildPathForOutputFile,
  checkArrLength,
  isCurrentDirEqualTargetDir,
  isDir,
  isFile,
} from "../../utils/index.js";
import { handlingErrorAsync } from "../../hof/index.js";
import { parse, resolve } from "path";
import { cwd } from "node:process";
import isItInArray from "../../utils/isItInArray.js";

const commandsWithSingleArg = ["cat", "add", "rm"];
const commandsWithTwoArgs = ["rn", "mv", "cp"];

const doFileOperationWithSingleArg = async (command, payload) => {
  checkArrLength(payload, 1);
  const destination = resolve(cwd(), payload.join(" "));
  if (command === "cat") {
    readAndPrintFile(destination);
  } else if (command === "add") {
    await createFile(destination);
  } else if (command === "rm") {
    await removeFile(destination);
  }
};

const doFileOperationWithTwoArg = async (command, payload) => {
  checkArrLength(payload, 2);
  const [source, outputPath] = [...payload];
  isFile(source);
  if (command === "rn") {
    const newName = resolve(cwd(), outputPath);
    await renameFile(source, newName);
    return;
  }
  isDir(outputPath);
  const { ext } = parse(source);
  const targetPath = buildPathForOutputFile(source, outputPath) + ext;
  if (command === "cp") {
    copyFile(source, targetPath);
  } else if (command === "mv") {
    !isCurrentDirEqualTargetDir(outputPath) && moveFile(source, targetPath);
  }
};

const doFsOperation = async (dataArray) => {
  checkArrLength(dataArray, 2);
  const command = dataArray[0];
  const payload = dataArray.slice(1);
  if (isItInArray(command, commandsWithSingleArg)) {
    await doFileOperationWithSingleArg(command, payload);
    return;
  }
  await doFileOperationWithTwoArg(command, payload);
};
export default handlingErrorAsync(doFsOperation);
