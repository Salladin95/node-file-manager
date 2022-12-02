import { getMsgWithCurrentPath } from "../utils/greet.js";

const withCurrentPathMsgAsync = (fn) => {
  return async (...arg) => {
    await fn(...arg);
    console.log(getMsgWithCurrentPath());
  };
};

export default withCurrentPathMsgAsync;
