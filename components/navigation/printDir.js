import {statSync} from "fs";
import {readdir} from "fs/promises";
import {sortByDir} from "../../utils/customSortFunctions.js";

const checkFile = (file) => {
  try {
    statSync(file);
    return true;
  } catch {
    return false;
  }
}

const modifiesFile = (file) => {
  const stats = statSync(file);
  return {
    Name: file,
    Type: stats.isFile() ? 'File' : 'Directory'
  }
};

const printDir = async (path) => {
  const files = await readdir(path);
  const result = files.filter(checkFile).sort(sortByDir).map(modifiesFile);
  console.table(result);
};

export default printDir;
