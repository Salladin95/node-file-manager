import { rename } from 'fs/promises';
import { handlingErrorAsync } from "../../hof/index.js";

const renameFile = async (oldPath, newPath) => {
    await rename(oldPath, newPath)
}

export default handlingErrorAsync(renameFile);
