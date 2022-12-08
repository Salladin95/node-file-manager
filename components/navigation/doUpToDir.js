import { parse } from "path";
import { cwd } from "node:process";
import { moveToDir } from "./index.js";

const doUpToDir = () => {
  const root = parse(cwd()).root;
  if (root !== cwd()) {
    moveToDir("../");
  }
};

export default doUpToDir;
