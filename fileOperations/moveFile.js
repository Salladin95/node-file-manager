import { copyFile } from "./index.js";
import { isSlashAtTheEndOfPath } from "../utils/utilsForString.js";

const moveFile = (source, pathToNewDirectory) => {
  const newFilePath = `${isSlashAtTheEndOfPath(pathToNewDirectory)}${source}`;
  copyFile(source, newFilePath, true);
};

export default moveFile;
