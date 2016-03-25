// "use strict";

// This is a common entry-level programming challenge

// Prove you know how to iterate through code with a loop
var i;
for (i = 1; i <= 100; i++) {
	// Prove you know how to invoke functions with arguments
	// console.log(fizzBuzzer(i)); // Prove you know that this invocation returns a value
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

//console.log(house.rooms);
//console.log(house.sharedEntrance);

house.lock();

house.rooms = 8;

house.floors = 2;

// console.log(house.rooms);

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
	// refer to the object being created via this constructor function: via the new keyword
	this.name = name;
	this.age = age;
	this.programmingLangs = programmingLangs;
}; 
Hacker.prototype = {
	logHackerData: function() {
		// console.log(this.name, this.age, this.programmingLangs);
	}
};
var hacker = new Hacker("Ryan Poplin", 25, ["JavaScript", "Swift"]);
hacker.logHackerData();
Hacker.prototype.testLog = function() {
	// console.log("test log");
};
hacker.testLog();

var myLib = {
	myName: "Ryan Poplin"
};

function doSomething() {
	var innerVar = 123;
	myLib.myName = "Hello, Ryan Poplin";
	function doSomethingElse() {
		innerVar = 1234;		
	}
	doSomethingElse();
	console.log(innerVar);
}

// doSomething();

// console.log(innerVar);

var hello = {
	whatIsThis: function() {
		console.log(this === hello);
	},
	someProp: "Some prop...",
	thisIsWhat: function() {
		var that = this;
		console.log(this);
		function scope() {
			// this will refer to 'global' in Node.js && 'window' in the browser
			// console.log(this); // global || window
			console.log(that); // 
			console.log(that.someProp);
		}
		scope();
		// var that = this;
		// console.log(this);
		
	}
};
// hello.whatIsThis();
// hello.thisIsWhat();

function whatIsThis() {
	// console.log(this);
	console.log(this === whatIsThis);
	console.log(this === global);
	function thisIsWhat() {
		// console.log(this);
		console.log(this === thisIsWhat);
		console.log(this === whatIsThis);
		console.log(this === global);
	}
	thisIsWhat();
}
// whatIsThis();

var testObj = { 
	scope: this 
};
// console.log(testObj.scope === testObj);
// console.log(testObj.scope);

function Efficient(defaults) {
	defaults = defaults || {};
	this.one = defaults.one || 1;
	this.two = defaults.two || 2;	
}
Efficient.prototype.logOne = function() {
	console.log(this.one);
	return this;
};
Efficient.prototype.logTwo = function() {
	console.log(this.two);
	return this;
};
var efficient = new Efficient({
	one: 1,
	two: 2
});
// since logOne() return the context of efficient...
// efficient.logOne().logTwo();

// Below is a super-sub badass OOP JavaScript Lesson!!!

function Super() {}
Super.prototype.superDescription = "Super Class Functionality";
Super.prototype.logSuperDescription = function() { 
	console.log(this.superDescription);
};
Super.prototype.polymorphism = function() {
	console.log(this);
	console.log("Super");
};
Super.prototype.mixinTest = "mixinTest";
function Sub() {}
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.subDescription = "Sub Class Functionality";
Sub.prototype.logSubDescription = function() {
	console.log(this.subDescription);
};
Sub.prototype.polymorphism = function() {
	console.log(this);
	Super.prototype.polymorphism.call(this);
	console.log("Sub");
};
Sub.prototype.mixinTest = "mixinTest";
var sup = new Super();
// sup.polymorphism();
var sub = new Sub();
// sub.logSuperDescription();
// sub.logSubDescription();
// console.log(sub.__proto__.__proto__);
// console.log(sub.__proto__);
// sub.polymorphism();

var descriptionLogger = {
	logSub: function(message) {
		this.mixinTest = message;
		console.log(this.mixinTest);
	},
	logSuper: function(message) {
		this.mixinTest = message;
		console.log(this.mixinTest);
	}
};

// descriptionLogger.logSuper("Message");
// descriptionLogger.logSub.call(sub, "Sub Class Message");
// console.log(sub.mixinTest);

// descriptionLogger.logSuper.apply(sup, ["Super Class Message"]);
// console.log(sup.mixinTest);

