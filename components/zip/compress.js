import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import { parse, resolve } from "path";
import {buildPathForOutputFile, isInputFileAndIsOutputIsDir} from "../../utils/index.js";
import { cwd } from "node:process";
import { promisify } from 'util';
import { pipeline } from 'stream';
const pipe = promisify(pipeline);

const compress = async (inputFile, outputDir) => {
  isInputFileAndIsOutputIsDir(inputFile, outputDir);
  const targetPath = buildPathForOutputFile(inputFile, outputDir) + '.br';
  const source = createReadStream(inputFile);
  const brotli = createBrotliCompress();
  const destination = createWriteStream(targetPath);
  source.pipe(brotli).pipe(destination);
  await pipe(inputFile, brotli, destination);
};

export default compress;
