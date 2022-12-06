import { writeFile } from "fs/promises";
import { withCurrentPathMsgAsync } from "../../hof/index.js";

const createFile = async (fileName, content = "") => {
  await writeFile(fileName, content);
};

export default withCurrentPathMsgAsync(createFile);
