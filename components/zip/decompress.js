import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import {
  buildPathForOutputFileWithoutExtension,
  isInputFileAndIsOutputIsDir,
} from "../../utils/index.js";
import isZipFile from "./isZipFile.js";

const pipe = promisify(pipeline);

const decompress = async (inputFile, outputDir) => {
  isInputFileAndIsOutputIsDir(inputFile, outputDir);
  isZipFile(inputFile);
  const targetPath = buildPathForOutputFileWithoutExtension(
    inputFile,
    outputDir
  );
  const source = createReadStream(inputFile);
  const destination = createWriteStream(targetPath);
  const brotli = createBrotliDecompress();
  await pipe(source, brotli, destination);
};

export default decompress;
