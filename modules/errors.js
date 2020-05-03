function breakMe() {
    throw new Error('Function broke on purpose!');
}

module.exports = {breakMe};
