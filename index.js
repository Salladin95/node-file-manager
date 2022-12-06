import { homedir } from "os";
import { chdir } from "node:process";

import {
  getCLIArgs,
  getValueFromStringAfterSeparator,
  greetUser,
  removeExtraSpaces,
  unknownInput,
} from "./utils/index.js";

import {
  doFsOperation,
  doNavigation,
  doOcCommand,
  isFSCommand,
  isNavigationCommand,
} from "./components/index.js";

const args = getCLIArgs();
const username = getValueFromStringAfterSeparator(args[0], "=");

chdir(homedir());
greetUser(username);

process.stdin.on("data", async (data) => {
  const dataArray = removeExtraSpaces(data).split(" ");
  const command = dataArray[0];

  if (command === ".exit") {
    process.emit("SIGINT");
  } else if (isNavigationCommand(command)) {
    await doNavigation(dataArray);
  } else if (isFSCommand(command)) {
    await doFsOperation(dataArray);
  } else if (command === "os") {
    doOcCommand(dataArray);
  } else {
    console.log(unknownInput);
  }
});

process.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
