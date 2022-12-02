import { cwd } from "node:process";
import { getValueFromStringAfterSeparator } from "../utils/index.js";
import moveToDir from "./moveToDir.js";
import {withCurrentPathMsgSync} from "../hof/index.js";

const doMoveToDir = (data) => {
  const path = getValueFromStringAfterSeparator(data, " ");
  if (path[0] === ".") {
    moveToDir(`${cwd()}/${path}`);
  } else {
    moveToDir(path);
  }
};

export default withCurrentPathMsgSync(doMoveToDir);
