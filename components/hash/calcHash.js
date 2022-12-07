import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async (targetFilePath) => {
  const rs = createReadStream(targetFilePath);
  const hashSum = createHash("sha256");
  rs.on("data", (dataChunk) => {
    hashSum.update(dataChunk);
  });
  return rs.on("end", () => {
    rs.close();
    const hex = hashSum.digest("hex");
    return hashSum;
  });
};

await calculateHash();
