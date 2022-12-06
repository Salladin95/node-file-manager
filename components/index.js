import { doNavigation, isNavigationCommand } from "./navigation/index.js";
import { doFsOperation, isFSCommand } from "./fileOperations/index.js";
import doOcCommand from "./os/index.js";

export {
  doOcCommand,
  doFsOperation,
  doNavigation,
  isFSCommand,
  isNavigationCommand,
};
