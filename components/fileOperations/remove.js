import { rm } from "fs/promises";

const removeFile = async (file) => {
  await rm(file);
};

export default removeFile;
