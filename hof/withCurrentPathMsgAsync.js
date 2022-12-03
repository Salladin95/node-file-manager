import { getMsgWithCurrentPath } from "../utils/greet.js";
import { operationErrMsg } from "../utils/index.js";

const withCurrentPathMsgAsync = (fn) => {
  return async (...arg) => {
    try {
      await fn(...arg);
      console.log(getMsgWithCurrentPath());
    } catch {
      console.log(operationErrMsg);
    }
  };
};

export default withCurrentPathMsgAsync;
