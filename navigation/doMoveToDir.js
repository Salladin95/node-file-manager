import { cwd } from "node:process";
import moveToDir from "./moveToDir.js";
import { withCurrentPathMsgSync } from "../hof/index.js";

const doMoveToDir = (path) => {
  if (path[0] === ".") {
    moveToDir(`${cwd()}/${path}`);
  } else {
    moveToDir(path);
  }
};

export default withCurrentPathMsgSync(doMoveToDir);
