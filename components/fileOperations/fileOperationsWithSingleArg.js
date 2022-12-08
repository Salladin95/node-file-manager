import { checkArrLength } from "../../utils/index.js";
import { resolve } from "path";
import { cwd } from "node:process";
import { createFile, readAndPrintFile, removeFile } from "./index.js";
import isItInArray from "../../utils/isItInArray.js";

const commandsWithSingleArg = ["cat", "add", "rm"];

const isFileOperationWithSingleArg = (command) =>
  isItInArray(command, commandsWithSingleArg);

const catAddRm = {
  cat: (destination) => readAndPrintFile(destination),
  add: async (destination) => {
    await createFile(destination);
  },
  rm: async (destination) => {
    await removeFile(destination);
  },
};

const doFileOperationWithSingleArg = async (command, payload) => {
  checkArrLength(payload, 1);
  const destination = resolve(cwd(), payload.join(" "));
  await catAddRm[command](destination);
};

export { doFileOperationWithSingleArg, isFileOperationWithSingleArg };
