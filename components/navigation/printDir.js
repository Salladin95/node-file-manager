import { statSync } from "fs";
import { readdir } from "fs/promises";
import { sortByDir } from "../../utils/customSortFunctions.js";
import { withCurrentPathMsgAsync } from "../../hof/index.js";

const printDir = async (path) => {
  const files = await readdir(path);
  const sortedFiles = files.sort(sortByDir).map((file) => ({
    Name: file,
    Type: statSync(file).isFile() ? "file" : "directory",
  }));
  console.table(sortedFiles);
};

export default withCurrentPathMsgAsync(printDir);
