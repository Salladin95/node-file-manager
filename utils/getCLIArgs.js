const getCLIArgs = () => {
  const startCustomArgsIndex = process.argv.indexOf("--") + 1;
  return process.argv.slice(startCustomArgsIndex);
};

export default getCLIArgs;
