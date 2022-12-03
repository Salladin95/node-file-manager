import { createReadStream, createWriteStream } from "fs";
import { getMsgWithCurrentPath, operationErrMsg } from "../utils/index.js";
import { removeFile } from "./remove.js";

const copyFile = (source, pathToNewFile, isRemoveSource = false) => {
  const rs = createReadStream(source, { encoding: "utf-8" });
  const ws = createWriteStream(pathToNewFile);
  rs.on("data", (dataChunk) => ws.write(dataChunk));
  rs.on("error", () => console.log(operationErrMsg));
  rs.on("close", () => {
    ws.close();
    console.log(getMsgWithCurrentPath());
  });

  ws.on("error", () => console.log(operationErrMsg));

  if (isRemoveSource) {
    ws.on("close", async () => {
      await removeFile(source);
    });
  }
};

export default copyFile;
