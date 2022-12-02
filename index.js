import { homedir } from "os";
import { chdir } from "node:process";

import {
  getCLIArgs,
  getValueFromStringAfterSeparator,
  greetUser,
  removeExtraSpaces,
  unknownInput,
} from "./utils/index.js";
import { doNavigation, isNavigationCommand } from "./navigation/index.js";

const home = homedir();
chdir(home);

const args = getCLIArgs();
const username = getValueFromStringAfterSeparator(args[0], "=");

greetUser(username, home);

process.stdin.on("data", async (data) => {
  const dataArray = removeExtraSpaces(data).split(" ");
  const command = dataArray[0];

  if (command === ".exit") {
    process.emit("SIGINT");
  } else if (isNavigationCommand(command)) {
    await doNavigation(dataArray);
  } else {
    console.log(unknownInput);
  }
});

process.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
