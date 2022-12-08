import compress from "./compress.js";
import decompress from "./decompress.js";
import isZipCommand from "./isZipCommand.js";
import { handlingErrorSync } from "../../hof/index.js";

const doZip = async (dataArray) => {
  if (dataArray.length !== 3) {
    throw new Error();
  }

  const command = dataArray[0];
  const source = dataArray[1];
  const destination = dataArray[2];

  if (command === "compress") {
    await compress(source, destination);
  } else {
    await decompress(source, destination);
  }
};

export { isZipCommand };
export default handlingErrorSync(doZip);
