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
const promiseMe = require('./promises').promiseMe;
const promiseMeAgain = require('./promises').promiseMeAgain;
const tryAndCatch = require('./promises').tryAndCatch;
(async function repeatAndRepeat() {
    await tryAndCatch(promiseMe());
    await tryAndCatch(promiseMeAgain());
    await tryAndCatch(promiseMe());
    await tryAndCatch(promiseMeAgain());
    await tryAndCatch(promiseMe());
    await tryAndCatch(promiseMeAgain());
    await tryAndCatch(promiseMe());
})();
