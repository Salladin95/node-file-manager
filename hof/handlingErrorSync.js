import { getMsgWithCurrentPath, operationErrMsg } from "../utils/index.js";

const handlingErrorSync = (fn) => {
  return (...arg) => {
    try {
      fn(...arg);
      console.log(getMsgWithCurrentPath());
    } catch {
      console.log(operationErrMsg);
    }
  };
};

export default handlingErrorSync;
