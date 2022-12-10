import { arch, cpus, EOL, homedir, userInfo } from "os";

const getEOL = () => JSON.stringify(EOL);
const getCPUS = () =>
  cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed / 1000}GHz`,
  }));

const getHomedir = () => homedir();
const getUserName = () => userInfo().username;
const getArchitecture = () => arch();

const ocInfo = {
  eol: () => getEOL(),
  cpus: () => getCPUS(),
  homedir: () => getHomedir(),
  username: () => getUserName(),
  architecture: () => getArchitecture(),
};

export default ocInfo;
