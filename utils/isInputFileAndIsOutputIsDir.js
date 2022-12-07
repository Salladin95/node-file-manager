import { statSync } from "fs";
import { fsErrorMsg } from "./contants.js";

const isInputFileAndIsOutputIsDir = (inp, out) => {
  if (!statSync(inp).isFile() || !statSync(out).isDirectory()) {
    throw new Error(fsErrorMsg);
  }
};

export default isInputFileAndIsOutputIsDir;
