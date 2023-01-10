import { doNavigation, isNavigationCommand } from "./navigation/index.js";
import { doFsOperation, isFSCommand } from "./fileOperations/index.js";
import { isZipCommand } from "./zip/index.js";
import doZip from './zip/index.js';
import doOcCommand from "./os/index.js";
import doHash from "./hash/index.js";

export {
  doZip,
  doHash,
  doOcCommand,
  doFsOperation,
  doNavigation,
  isZipCommand,
  isFSCommand,
  isNavigationCommand,
};
