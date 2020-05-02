const name = process.env.NAME || 'Anonymous';
console.log('Hello ' + name);

// Run this like this: NAME=name node environment.js
// Run just node environment.js for the default value
// This is the most basic way, without .env file
