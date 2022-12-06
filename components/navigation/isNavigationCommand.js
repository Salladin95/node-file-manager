import isItInArray from "../../utils/isItInArray.js";

const navigationCommands = ["cd", "ls", "up"];
const isNavigationCommand = (command) =>
  isItInArray(command, navigationCommands);

export default isNavigationCommand;
