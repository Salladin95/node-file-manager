import { rm } from "fs/promises";
import { withCurrentPathMsgAsync } from "../hof/index.js";

const removeFile = async (file) => {
  await rm(file);
};

export { removeFile };

export default withCurrentPathMsgAsync(removeFile);
