let square = (x) => x * x;
console.log(square(9));


// Defining an object literal and using 'this' in ES6
let user = {
	name: 'Leif',
	sayHi: () => {
		console.log(`Hi ${user.name}`);
	},
	sayHiAlt () {
		console.log(`Hi ${this.name}`);
	}
};

user.sayHi();
user.sayHiAlt();