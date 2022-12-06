import { operationErrMsg } from "../../utils/contants.js";
import {
  copyFile,
  createFile, moveFile,
  readAndPrintFile,
  removeFile,
  renameFile,
} from "./index.js";
import extractFileNamesFromPath from "./extractFileNamesFromPath.js";

const doFsOperation = async (dataArray) => {
  if (dataArray.length < 2) {
    console.log(operationErrMsg);
    return;
  }
  const command = dataArray[0];
  const path = dataArray.slice(1).join(" ");
  if (command === "cat") {
    readAndPrintFile(path);
  } else if (command === "add") {
    await createFile(path);
  } else if (command === "rm") {
    await removeFile(path);
  } else {
    if (dataArray.length >= 3) {
      const [path1, path2] = extractFileNamesFromPath(path);
      if (command === "rn") {
        await renameFile(path1, path2);
      } else if (command === "cp") {
        copyFile(path1, path2);
      } else if (command === "mv") {
        moveFile(path1, path2);
      }
    } else {
      console.log(operationErrMsg);
    }
  }
};
export default doFsOperation;
