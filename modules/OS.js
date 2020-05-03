// OS module allows to gain access to low level info about the operative system
const os = require("os");
const arch = os.arch();
const SIZE = 1024;

// Obtain KB
function kb(bytes) {
  return bytes / SIZE;
}

// Obtain MB
function mb(bytes) {
  return kb(bytes) / SIZE;
}

// Obtain GB
function gb(bytes) {
  return mb(bytes) / SIZE;
}

const freememKB = kb(os.freemem());
const freememMB = mb(os.freemem());
const freememGB = gb(os.freemem());
const totalGB = gb(os.totalmem());
const homeDIR = os.homedir();
const hostName = os.hostname();

module.exports = {
  arch,
  freememKB,
  freememMB,
  freememGB,
  totalGB,
  homeDIR,
  hostName,
};
