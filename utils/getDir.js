import { fileURLToPath } from "url";
import { dirname } from "path";

const getFileNameAndDirname = (url) => ({
  filename: fileURLToPath(url),
  dirname: dirname(fileURLToPath(url)),
});

const getDirname = (url) => dirname(fileURLToPath(url));

export { getDirname, getFileNameAndDirname };
