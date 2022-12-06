import isItInArray from "../../utils/isItInArray.js";

const fsCommands = ["cat", "add", "rn", "rm", "cp", "mv"];
const isFSCommand = (command) => isItInArray(command, fsCommands);

export default isFSCommand;
