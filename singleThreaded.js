module.exports = function singleThreaded() {
    console.log('Hello world!');

// If there is an error, the process will TERMINATE. It is SINGLE THREADED
    let i = 0;
    const iteration = setInterval(() => {
        console.log(i);
        i++;

        if (i === 5) {
            //console.log('We force an error. It WILL STOP');
            //let a = 3 + z;
            clearInterval(iteration);
        }
    }, 1000);
}
