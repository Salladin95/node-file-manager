import { checkArrLength } from "../../utils/index.js";
import { handlingErrorAsync } from "../../hof/index.js";

import {
  doFileOperationWithSingleArg,
  isFileOperationWithSingleArg,
} from "./fileOperationsWithSingleArg.js";
import { doFileOperationWithTwoArg } from "./fileOperationsWithTwoArgs.js";

const doFsOperation = async (dataArray) => {
  checkArrLength(dataArray, 2);
  const command = dataArray[0];
  const payload = dataArray.slice(1);
  if (isFileOperationWithSingleArg(command)) {
    await doFileOperationWithSingleArg(command, payload);
    return;
  }
  await doFileOperationWithTwoArg(command, payload);
};
export default handlingErrorAsync(doFsOperation);
