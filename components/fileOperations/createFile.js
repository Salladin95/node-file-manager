import { writeFile } from "fs/promises";
import { handlingErrorAsync } from "../../hof/index.js";

const createFile = async (fileName, content = "") => {
  await writeFile(fileName, content);
};

export default handlingErrorAsync(createFile);
