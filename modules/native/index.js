// To require the new created module we call it by the name defined in the JSON, in binding.gyp
const helloWorldModule = require('./build/Release/addon');
module.exports = helloWorldModule;
