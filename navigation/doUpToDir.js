import { parse } from "path";
import { cwd } from "node:process";
import { withCurrentPathMsgSync } from "../hof/index.js";
import { moveToDir } from "./index.js";

const doUpToDir = () => {
  const root = parse(cwd()).root;
  if (root !== cwd()) {
    moveToDir("../");
  }
};

export default withCurrentPathMsgSync(doUpToDir);
