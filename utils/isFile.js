import { statSync } from "fs";
import { fsErrorMsg } from "./contants.js";

const isFile = (file) => {
  if (!statSync(file).isFile()) {
    throw new Error(fsErrorMsg);
  }
  return true;
};

export default isFile;
