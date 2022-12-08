import { homedir } from "os";
import { chdir } from "node:process";
import { createInterface } from 'readline';

import {
  getCliArgByKey,
  getCLIArgs,
  greetUser,
  removeExtraSpaces,
  unknownInput,
} from "./utils/index.js";

import {
  doFsOperation,
  doHash,
  doNavigation,
  doOcCommand,
  doZip,
  isFSCommand,
  isNavigationCommand,
  isZipCommand,
} from "./components/index.js";

const args = getCLIArgs();
const username = getCliArgByKey("--username", args);

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

chdir(homedir());
greetUser(username);


readLine.on("line", async (data) => {
  const dataArray = removeExtraSpaces(data).split(" ");
  const command = dataArray[0];

  if (command === ".exit") {
    readLine.emit("SIGINT");
  } else if (isNavigationCommand(command)) {
    await doNavigation(dataArray);
  } else if (isFSCommand(command)) {
    await doFsOperation(dataArray);
  } else if (command === "os") {
    doOcCommand(dataArray);
  } else if (command === "hash") {
    await doHash(dataArray);
  } else if (isZipCommand(command)) {
    await doZip(dataArray);
  } else {
    console.log(unknownInput);
  }
});

readLine.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  process.nextTick(() => process.exit(0));
});
