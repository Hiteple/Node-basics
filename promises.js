function promiseMe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve('1. Yay!');
            } else reject('1. Nope...');
        }, 1000);
    })
}

function promiseMeAgain() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.5) {
                resolve('2. This is another message, another response');
            } else reject('2. Nope... nope nope nope');
        }, 1000);
    })
}

async function tryAndCatch(promise) {
    let result;
    try {
        result = await promise;
    } catch (error) {
        console.log(error);
    } finally {
        result ? console.log(result) : false;
    }
}

module.exports = {promiseMe, promiseMeAgain, tryAndCatch};
