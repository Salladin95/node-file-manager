import { getMsgWithCurrentPath } from "../utils/greet.js";

const withCurrentPathMsgSync = (fn) => {
  return (...arg) => {
    fn(...arg);
    console.log(getMsgWithCurrentPath());
  };
};

export default withCurrentPathMsgSync;
