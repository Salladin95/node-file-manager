import { cwd } from "node:process";
import { resolve } from "path";

const isCurrentDirEqualTargetDir = (tarDir) => {
  return resolve(cwd(), tarDir) === cwd();
};

export default isCurrentDirEqualTargetDir;
