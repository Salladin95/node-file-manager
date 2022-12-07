import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async (targetFilePath) => {
  const rs = createReadStream(targetFilePath);
  const hashSum = createHash("sha256");
  return new Promise((resolve, reject) => {
    rs.on("data", (dataChunk) => {
      hashSum.update(dataChunk);
    });
    rs.on("end", () => {
      rs.close();
      resolve(hashSum.digest("hex"));
    });
    rs.on("error", (err) => reject(err));
  });
};

export default calculateHash;
