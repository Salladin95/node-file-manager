import { createReadStream, createWriteStream } from "fs";
import { operationErrMsg } from "../../utils/index.js";
import removeFile from "./remove.js";

const copyFile = (source, pathToNewFile, isRemoveSource = false) => {
  const rs = createReadStream(source, { encoding: "utf-8" });
  const ws = createWriteStream(pathToNewFile);
  let err = false;
  rs.on("data", (dataChunk) => ws.write(dataChunk));
  rs.on("close", () => ws.close());

  rs.on("error", () => {
  });
  ws.on("error", () => {
    err = true;
    console.log(operationErrMsg)
  });

  if (isRemoveSource) {
    ws.on("close", async () => {
      if (!err) {
        await removeFile(source);
      }
    });
  }
};

export default copyFile;
