import { doMoveToDir, doUpToDir, printDir } from "./index.js";
import { cwd } from "node:process";
import { operationErrMsg } from "../../utils/index.js";

const doNavigation = async (dataArray) => {
  const command = dataArray[0];
  if (command === "cd") {
    dataArray[1] ? doMoveToDir(dataArray[1]) : console.log(operationErrMsg);
  } else if (command === "up") {
    doUpToDir();
  } else if (command === "ls") {
    await printDir(cwd());
  }
};

export default doNavigation;
