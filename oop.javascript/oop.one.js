"use strict";

// This is a common entry-level programming challenge

// Prove you know how to iterate through code with a loop
var i;
for (i = 1; i <= 100; i++) {
	// Prove you know how to invoke functions with arguments
	console.log(fizzBuzzer(i)); // Prove you know that this invocation returns a value
	// Know that you can invoke this 'fizzBuzzer()' function before it's defined because the function definition 'hoists' to the top of the scope/file
}

// Prove you know how to declare a function and understand you can pass arguments to it
function fizzBuzzer(n) {
	// Prove you can use conditional statements to provide functionality based on mathematical return values (Prove you can do some arithmetic, too)
	// Prove you know why you must check for "FizzBuzz" first
	if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
	if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
	return n.toString(); // Prove you know that JavaScript is Object-Oriented, why you need alter the type of a value in this program
}

var house = {
	rooms: 7,
	sharedEntrance: false, 
	lock: function() {},
	unlock: function() {}
};

console.log(house.rooms);
console.log(house.sharedEntrance);

house.lock();

house.rooms = 8;

house.floors = 2;

console.log(house.rooms);

var apartment = {
	floors: 1,
	rooms: 4,
	sharedEntrance: true,
	lock: function() {},
	unlock: function() {}
};

function Accommodation() {};

var houseInstance1 = new Accommodation();
var apartmentInstance1 = new Accommodation();

houseInstance1.constructor === Accommodation;
apartmentInstance1.constructor === Accommodation;

houseInstance1 instanceof Accommodation;
apartmentInstance1 instanceof Accommodation;

var apartmentInstance2 = new houseInstance1.constructor();
apartmentInstance2 instanceof Accommodation;

Accommodation.prototype.floors = 0;
Accommodation.prototype.rooms = 0;
Accommodation.prototype.sharedEntrance = false;
Accommodation.prototype.lock = function() {};
Accommodation.prototype.unlock = function() {};

var houseInstance2 = new Accommodation();
var apartmentInstance3 = new Accommodation();

function Hacker(name, age, programmingLangs) {
	this.name = name;
	this.age = age;
	this.programmingLangs = programmingLangs;
}; 
Hacker.prototype = {
	logHackerData: function() {
		console.log(this.name, this.age, this.programmingLangs);
	}
};
var hacker = new Hacker("Ryan Poplin", 25, ["JavaScript", "Swift"]);
hacker.logHackerData();