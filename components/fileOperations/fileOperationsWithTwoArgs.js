import isItInArray from "../../utils/isItInArray.js";
import { copyFile, moveFile, renameFile } from "./index.js";
import {
  buildPathForOutputFile,
  checkArrLength,
  isCurrentDirEqualTargetDir,
  isDir,
  isFile,
} from "../../utils/index.js";
import {parse, resolve} from "path";
import { cwd } from "node:process";

const commandsWithTwoArgs = ["rn", "mv", "cp"];

const isFileOperationWithSingArg = (command) =>
  isItInArray(command, commandsWithTwoArgs);

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
  const targetPath = buildPathForOutputFile(source, outputPath);
  const root = parse(cwd()).root;
  if (command === "cp") {
    if (targetPath === root) {
      throw new Error();
    }
    copyFile(source, targetPath);
  } else if (command === "mv") {
    if (targetPath === root) {
      throw new Error();
    }
    !isCurrentDirEqualTargetDir(outputPath) && moveFile(source, targetPath);
  }
};

export { isFileOperationWithSingArg, doFileOperationWithTwoArg };
