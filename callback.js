module.exports = function callback(cb) {
    console.log('Hi, I\'m an async function... wait for it...');
    setTimeout(() => {
        console.log('Now this is async!');
    }, 1000);

    console.log(cb);
}
