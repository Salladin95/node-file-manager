import { statSync } from "fs";
import { fsErrorMsg } from "./contants.js";

const isDir = (dir) => {
  if (!statSync(dir).isDirectory()) {
    throw new Error(fsErrorMsg);
  }
  return true;
};

export default isDir;
