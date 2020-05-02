function promiseMe() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve('1. Yay!');
        } else reject('1. Nope...');
    })
}

function promiseMeAgain() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve('2. This is another message, another response');
        } else reject('2. Nope... nope nope nope');
    })
}

module.exports = {promiseMe, promiseMeAgain};
