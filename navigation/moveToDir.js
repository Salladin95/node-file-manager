import { chdir } from "node:process";
import { operationErrMsg } from "../utils/index.js";

const moveToDir = (path) => {
  try {
    chdir(path);
  } catch {
    console.log(operationErrMsg);
  }
};

export default moveToDir;
