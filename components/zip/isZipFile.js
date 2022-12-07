import { parse } from "path";

export const itIsNotAZipFile = 'Target file is not a zip file';

const isZipFile = (targetFile) => {
  const { ext } = parse(targetFile);
  if (ext !== ".br") {
      throw new Error(itIsNotAZipFile)
  }
  return true;
};

export default isZipFile;
