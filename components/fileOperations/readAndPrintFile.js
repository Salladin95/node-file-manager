import { createReadStream } from "fs";
import { operationErrMsg } from "../../utils/contants.js";
import { getMsgWithCurrentPath } from "../../utils/index.js";

const readAndPrintFile = (path) => {
  const rs = createReadStream(path, { encoding: "utf-8" });
  let fileContent = "";
  rs.on("data", (dataChunk) => {
    fileContent += dataChunk;
  });
  rs.on("end", () => {
    console.log(fileContent);
    console.log(getMsgWithCurrentPath());
  });
  rs.on("error", () => {
    console.log(operationErrMsg);
  });
};

export default readAndPrintFile;
