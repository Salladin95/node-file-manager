import { rm } from "fs/promises";
import { handlingErrorAsync } from "../../hof/index.js";

const removeFile = async (file) => {
  await rm(file);
};

export { removeFile };

export default handlingErrorAsync(removeFile);
