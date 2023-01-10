const getMsgWithCurrentPath = () => `You are currently in ${process.cwd()}`;
const greetUser = (name) => {
  console.log(`Welcome to the File Manager, ${name}!`);
  console.log(getMsgWithCurrentPath());
};

export { getMsgWithCurrentPath, greetUser };