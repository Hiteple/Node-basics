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
const {breakMe} = require('./modules/errors');

try {
    breakMe();
} catch (error) {
    console.log(`Wow, something broke here... It is an ${error}... But rest assured, for it was captured :)`);
}
