import osInfo from "./osInfo.js";
import isItOcCommand from "./isOcCommand.js";
import { checkArrLength, operationErrMsg } from "../../utils/index.js";
import { handlingErrorSync } from "../../hof/index.js";

const doOcCommand = (inputArray) => {
  checkArrLength(inputArray, 2);
  const command = inputArray[1].slice(2);
  if (!isItOcCommand(command)) {
    throw new Error(operationErrMsg);
  }
  console.log(osInfo[command.toLowerCase()]);
};

export default handlingErrorSync(doOcCommand);
