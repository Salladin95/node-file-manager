import { doUpToDir, moveToDir, printDir } from "./index.js";
import { resolve } from "path";
import { cwd } from "node:process";
import { checkArrLength } from "../../utils/index.js";

const createNavigation = () => {
  return {
    ls: async () => {
      await printDir(cwd());
    },
    up: () => doUpToDir(),
    cd: (dataArray) => {
      checkArrLength(dataArray);
      let destination = dataArray.slice(1).join(" ");
      destination = resolve(cwd(), destination);
      moveToDir(destination);
    },
  };
};

export default createNavigation;
