const message = 'Hi there!';
const secondMessage = 'I\'m doing just fine';
const thirdMessage = 'What about you?';

// For console.group
function func1() {
    console.group('Function 1');
    console.log('This is function 1!');
    console.log('This is function 1!');
    console.log('This is function 1!');
    func2();
    console.groupEnd();
}
function func2() {
    console.group('Function 2');
    console.log('This is function 2!');
    console.log('This is function 2!');
    console.log('This is function 2!');
    console.groupEnd();
}


module.exports = {message, secondMessage, thirdMessage, func1};
