import moveToDir from "./moveToDir.js";
import { withCurrentPathMsgSync } from "../hof/index.js";

const doMoveToDir = (path) => {
  moveToDir(path);
};

export default withCurrentPathMsgSync(doMoveToDir);
