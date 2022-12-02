const navigationCommands = ["cd", "ls", "up"];
const isNavigationCommand = (command) => navigationCommands.includes(command);

export default isNavigationCommand;
