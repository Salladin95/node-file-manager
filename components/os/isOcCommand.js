import isItInArray from "../../utils/isItInArray.js";

const ocCommands = ['EOL', 'cpus', 'homedir', 'username', 'architecture'];

const isItOcCommand = (command) => isItInArray(command, ocCommands);

export default isItOcCommand;
