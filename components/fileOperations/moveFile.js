import { copyFile } from "./index.js";
import { cwd } from "node:process";

const moveFile = (source, pathToNewDirectory) => {
  copyFile(source, pathToNewDirectory, true);
};

export default moveFile;
