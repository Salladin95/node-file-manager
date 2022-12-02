import { homedir } from "os";
import { chdir, cwd } from "node:process";

import { doMoveToDir, doUpToDIr, printDir } from "./navigation/index.js";
import {
  getCLIArgs,
  getValueFromStringAfterSeparator,
  greetUser,
  removeExtraSpaces,
  unknownInput,
} from "./utils/index.js";

const home = homedir();
chdir(home);

const args = getCLIArgs();
const username = getValueFromStringAfterSeparator(args[0], "=");

greetUser(username, home);

process.stdin.on("data", async (data) => {
  const stringData = removeExtraSpaces(data);
  if (stringData.match(/^cd\s.*$/gim)) {
    doMoveToDir(stringData);
  } else if (stringData === "up") {
    doUpToDIr();
  } else if (stringData === "ls") {
    await printDir(cwd());
  } else if (stringData === ".exit") {
    process.emit("SIGINT");
  } else {
    console.log(unknownInput);
  }
});

process.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
