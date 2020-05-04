// Used to require each file

// 1. Single Threaded
//const singleThreaded = require('./singleThreaded');
//singleThreaded();

// 2. Environment variables
//const name = require('./environment');
//console.log('Hi ' + name);

// 3. Callbacks
//const callbackFunc = require('./callback');
//const callbackLog = '...he he';
//callbackFunc(callbackLog);

// 4. Better than callbacks: promises
//const promiseMe = require('./promises').promiseMe;
//const promiseMeAgain = require('./promises').promiseMeAgain;
//promiseMe()
//    .then((response) => console.log(response))
//    .catch(error => console.log(error))
//    .then(() => promiseMeAgain().then((anotherResponse) => console.log(anotherResponse)))
//    .catch(errorTwo => console.log(errorTwo))
//    .then(() => promiseMeAgain().then((anotherResponse) => console.log(anotherResponse)))
//    .catch(errorThree => console.log(errorThree))

// 5. Even better: Async/Await
//const promiseMe = require('./promises').promiseMe;
//const promiseMeAgain = require('./promises').promiseMeAgain;
//const tryAndCatch = require('./promises').tryAndCatch;
//(async function repeatAndRepeat() {
//    await tryAndCatch(promiseMe());
//    await tryAndCatch(promiseMeAgain());
//    await tryAndCatch(promiseMe());
//    await tryAndCatch(promiseMeAgain());
//    await tryAndCatch(promiseMe());
//    await tryAndCatch(promiseMeAgain());
//    await tryAndCatch(promiseMe());
//})();

// MODULES
// 6. Globals
//const {globals, processes} = require('./modules/globals');
//console.log(globals());
//console.log(processes());

// 7. File System
//const readMe = require('./modules/file-system');
//readMe(__dirname + '/txt/hi-there.txt').then((data) => console.log(data));

// 8. Console
//const { message, secondMessage, thirdMessage, func1 } = require('./modules/console');
//console.log(message);
//console.info(message);
//console.error(message);
//console.warn(message);

// This will be formatted like a table
//const table = [
//    {
//        a: 1,
//        b: 'z'
//    },
//    {
//        a: 2,
//        b: 'y'
//    }
//]
//console.log(table); // Normal
//console.table(table); // Table

// This will be indented
//console.group('Conversation:');
//console.log(message);
//console.log(secondMessage);
//console.log(thirdMessage);
//console.groupEnd();

//func1();

// 9. Errors
//const {breakMe} = require('./modules/errors');

//try {
//    breakMe();
//} catch (error) {
//    console.log(`Wow, something broke here... It is an ${error}... But rest assured, for it was captured :)`);
//}

// 10. Child processes
//const {executeThis, spawnProcess} = require('./modules/child-processes');
// Always comment this one below, or the rest won't be executed
//executeThis();
// Always comment this one above or the rest won't be executed
//spawnProcess();

// 11. HTTP
//const {myServer} = require('./modules/http');
//myServer();

// 12. OS
//const {
//  arch,
//  freememKB,
//  freememMB,
//  freememGB,
//  totalGB,
//  homeDIR,
//  hostName,
//} = require("./modules/OS");
//console.log(arch);
// Logging free RAM and the directories
//console.log(freememKB);
//console.log(freememMB);
//console.log(freememGB);
//console.log(totalGB);
//console.log(homeDIR);
//console.log(hostName);

// 13. Process module
//const { beforeExit, onExit, uncaught } = require("./modules/process");
//beforeExit();
//onExit();
//uncaught();

// 14. Popular modules
//const {
//  hashPass,
//  usingMoment,
//  usingSharp,
//} = require("./modules/popular-modules");

//console.log("HASHING PASS...");
//hashPass("1234");
//console.log("USING MOMENT");
//usingMoment();
//console.log("END USING MOMENT");
//console.log("USING SHARP");
//usingSharp(
//  __dirname + "/assets/original.png",
//  __dirname + "/assets/resized.png"
//);
//console.log("END USING SHARP");

// 15. Buffers && streams
// Buffers
//const { buffer1, buffer2, bufferString, makeABC } = require("./memory/buffers");
//const { data } = require("./memory/streams");
//console.log(buffer1);
//console.log(buffer2);
//bufferString();
//makeABC();

// Streams
//data();

// 16. Benchmarking
const add = require("./benchmarking");
console.log(add);
