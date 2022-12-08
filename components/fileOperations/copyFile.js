import { createReadStream, createWriteStream } from "fs";
import { operationErrMsg } from "../../utils/index.js";
import removeFile from "./remove.js";

const copyFile = (source, pathToNewFile, isRemoveSource = false) => {
  const rs = createReadStream(source, { encoding: "utf-8" });
  const ws = createWriteStream(pathToNewFile);
  rs.on("data", (dataChunk) => ws.write(dataChunk));
  rs.on("close", () => ws.close());

  rs.on("error", () => console.log(operationErrMsg));
  ws.on("error", () => console.log(operationErrMsg));

  if (isRemoveSource) {
    ws.on("close", async () => {
      await removeFile(source);
    });
  }
};

export default copyFile;
