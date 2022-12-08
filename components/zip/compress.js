import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";

import {
  buildPathForOutputFile,
  isInputFileAndIsOutputIsDir,
} from "../../utils/index.js";

const pipe = promisify(pipeline);

const compress = async (inputFile, outputDir) => {
  isInputFileAndIsOutputIsDir(inputFile, outputDir);

  const targetPath = buildPathForOutputFile(inputFile, outputDir) + '.br';
  const source = createReadStream(inputFile);
  const brotli = createBrotliCompress();
  const destination = createWriteStream(targetPath);

  await pipe(source, brotli, destination);
};

export default compress;
