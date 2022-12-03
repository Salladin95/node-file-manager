import { chdir } from "node:process";

const moveToDir = (path) => {
  chdir(path);
};

export default moveToDir;
