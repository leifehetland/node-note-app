console.log('Starting app.js.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let banana = 'Hello World';

console.log(_.isString(true));
console.log(_.isString('true'));
console.log(_.isString(banana));
console.log(_.uniq([1, true, true, 1, 1, 1, 1, 5, 5, 5, banana, banana, banana]));


let res = notes.addNote();
console.log(res);

let sum = notes.add(5,5);

console.log(sum);

// let user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age} years old. :(`, function(err) {
// 	if (err) {
// 		console.log('Unable to write to file.');	
// 	}
// });

// fs.appendFileSync('greetings.txt', 'Hello World');