import { parse, resolve } from "path";
import { isSlashAtTheEndOfPath } from "./utilsForString.js";
import { cwd } from "node:process";

const buildPathForOutputFile = (inputFile, outputDir) => {
  const { name } = parse(inputFile);
  return resolve(cwd(), isSlashAtTheEndOfPath(outputDir), name);
};

export default buildPathForOutputFile;
