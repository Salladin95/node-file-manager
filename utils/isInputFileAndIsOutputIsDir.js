import { isDir, isFile } from "./index.js";

const isInputFileAndIsOutputIsDir = (inp, out) => {
  isFile(inp);
  isDir(out);
  return true;
};

export default isInputFileAndIsOutputIsDir;
