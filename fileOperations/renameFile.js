import { rename } from 'fs/promises';
import { withCurrentPathMsgAsync } from "../hof/index.js";

const renameFile = async (oldPath, newPath) => {
    await rename(oldPath, newPath)
}

export default withCurrentPathMsgAsync(renameFile);
