const fsCommands = ["cat", "add", "rn", "rm", "cp", "mv"];
const isFSCommand = (command) => fsCommands.includes(command);

export default isFSCommand;
