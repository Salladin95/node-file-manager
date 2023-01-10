import {format, parse} from "path";

const replaceFileExtension = (inputFile, ext) => {
  return format({ ...parse(inputFile), base: "", ext });
};

export default replaceFileExtension;