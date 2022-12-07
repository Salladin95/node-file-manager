import osInfo from "./osInfo.js";
import isItOcCommand from "./isOcCommand.js";
import { operationErrMsg } from "../../utils/index.js";

const doOcCommand = (inputArray) => {
  if (inputArray.length < 2) {
    console.log(operationErrMsg);
    return;
  }
  const command = inputArray[1].slice(2);
  isItOcCommand(command)
    ? console.log(osInfo[command.toLowerCase()])
    : console.log(operationErrMsg);
};

export default doOcCommand;
