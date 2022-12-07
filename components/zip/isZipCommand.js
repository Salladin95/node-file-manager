import isItInArray from "../../utils/isItInArray.js";

const zipCommands = ["compress", "decompress"];

const isZipCommand = (command) => isItInArray(command, zipCommands);

export default isZipCommand;
