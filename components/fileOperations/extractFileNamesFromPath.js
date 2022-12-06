const extractFileNamesFromPath = (path) => {
  const arrPath = path.split(" ");
  return [...arrPath];
};

export default extractFileNamesFromPath;
