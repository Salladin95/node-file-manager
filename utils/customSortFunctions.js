import {statSync} from "fs";

const sortStringByAlphabet = (a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase());

const sortStringByAlphabetReverse = (a, b) =>
  b.toLowerCase().localeCompare(a.toLowerCase());

const sortByDir = (file1, file2) => {
  try {
    const isFile1Directory = statSync(file1).isDirectory();
    const isFile2Directory = statSync(file2).isDirectory();
    if (isFile1Directory && isFile2Directory) {
      return sortStringByAlphabet(file1, file2);
    } else if (isFile1Directory) {
      return -1;
    } else if (isFile2Directory) {
      return 1;
    }
    return sortStringByAlphabet(file1, file2);
  } catch (err) {
    throw err;
  }
};

export {sortByDir, sortStringByAlphabet, sortStringByAlphabetReverse};
