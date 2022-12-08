import calculateHash from "./calcHash.js";
import { handlingErrorAsync } from "../../hof/index.js";
import { statSync } from "fs";

const doHash = async (dataArray) => {
  const pathToFile = dataArray.slice(1).join(' ');
  if (!statSync(pathToFile).isFile()) {
    throw new Error(`${pathToFile} is not a directory.`);
  }
  const hash = await calculateHash(pathToFile);
  console.log(hash);
};

export default handlingErrorAsync(doHash);
