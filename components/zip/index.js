import compress from "./compress.js";
import decompress from "./decompress.js";
import isZipCommand from "./isZipCommand.js";
import { handlingErrorAsync } from "../../hof/index.js";
import { checkArrLength } from "../../utils/index.js";

const doZip = async (dataArray) => {
  checkArrLength(dataArray, 3);
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
export default handlingErrorAsync(doZip);
