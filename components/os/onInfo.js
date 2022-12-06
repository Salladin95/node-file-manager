import { arch, cpus, EOL, homedir, userInfo } from "components/os/index.js";

const getEOL = () => JSON.stringify(EOL);
const getCPUS = () => cpus();
const getHomedir = () => homedir();
const getUserName = () => userInfo().username;
const getArchitecture = () => arch();

const ocInfo = {
  eol: getEOL(),
  cpus: getCPUS(),
  homedir: getHomedir(),
  username: getUserName(),
  architecture: getArchitecture(),
};

export default ocInfo;
