import { rename } from 'fs/promises';

const renameFile = async (oldPath, newPath) => {
    await rename(oldPath, newPath)
}

export default renameFile;
