import {getMsgWithCurrentPath} from "../utils/greet.js";
import {operationErrMsg} from "../utils/index.js";

const withCurrentPathMsgSync = (fn) => {
  return (...arg) => {
    try {
      fn(...arg);
      console.log(getMsgWithCurrentPath());
    } catch {
      console.log(operationErrMsg);
    }
  };
};

export default withCurrentPathMsgSync;
