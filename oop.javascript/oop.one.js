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

var add = function(one, two, three, four, five, six, seven, eight) {
	var total = 0;
	for (var index = 0, length = arguments.length; index < length; index++) {
		total += arguments[index];
	}
	console.log(total);
};
// add(1, 2, 3, 4, 5, 6, 7, 8);

function Vehicle() { this.isAlarmed = false; }
Vehicle.prototype.alarm = function(note, time) {
	var message = "Alarm activated at " + time + " with the note: " + note;
	this.isAlarmed = true;
	console.log(message);
};

function Truck() { this.isLocked = false; }
Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;
Truck.prototype.alarm = function() {
	this.isLocked = true;
	Vehicle.prototype.alarm.apply(this, arguments);
};

var truck = new Truck();
// console.log(truck.isLocked);
// truck.alarm("Alarm activated", new Date());
// console.log(truck.isLocked);

function A() {}
// A.prototype = new B();
A.prototype.message = "A";
A.prototype.logMessage = function() {
	// var that = this;
	// console.log(this);
	// console.log(this.message);
	var b = B.prototype.logMessage.call(this);
	// console.log(b);
	// function inner() {
	// 	console.log(that);
	// 	function innerInner() {
	// 		console.log(that);
	// 	}
	// 	innerInner();
	// }
	// inner();
	// return this;
};
function B() {}
// B.prototype = new A();
B.prototype.message = "B";
B.prototype.logMessage = function() {
	// var that = this;
	// console.log(this);
	// console.log(this.message);
	var a = this;
	a.message = "B";
	return this;
	// A.prototype.logMessage.call(this);
	// function inner() {
	// 	console.log(that);
	// 	function innerInner() {
	// 		console.log(that);
	// 	}
	// 	innerInner();
	// }
	// inner();
	// return this;
};

var a = new A();
var b = new B();

a.logMessage();
// context pass...
// class communication...
// console.log(a.message);
// b.logMessage();

// now there's Node.js Modules and ES6 Modules to replace the IIFE's...
// sort of old school
var Complex = (function() {
	function Complex() {}

	var _isLocked = false,
	    _isAlarmed = false, 
	    _alarmMessage = "Alarm activated!"

	function _alarm() {
		_isAlarmed = true;
		console.log(_alarmMessage);
	}

	function _disableAlarm() {
		_isAlarmed = false;
	}

	// anything on the prototype chain is public
	Complex.prototype.lock = function() {
		_isLocked = true;
		_alarm();
	};

	Complex.prototype.unlock = function() {
		_isLocked = false;
		_disableAlarm();
	};

	Complex.prototype.getIsLocked = function() {
		return _isLocked;
	};

	Complex.prototype.setAlarmMessage = function(message) {
		_alarmMessage = message;
	};

	return Complex;
}());

var complex = new Complex();
// complex.lock();

// function Scope() {
// 	function _privateAccess() {
// 		console.log("_private access");
// 	}
// 	Scope.prototype.publicAccess = function() {
// 		_privateAccess();
// 	};
// }
// var scope = new Scope();
// scope.publicAccess();


// CONTINUE THIS LATER...
// var Class = (function() {
// 	function create(classDefinition, parentPrototype) {
// 		var _NewClass = function() {
// 			if (this.initialize && typeof this.initialize === "function") {
// 				this.initialize.apply(this, arguments);
// 			}
// 		},
// 		_name;
		
// 		if (parentPrototype) {
// 			_NewClass.prototype = new parentPrototype.constructor();
// 			for (_name in parentPrototype) {
// 				if (parentPrototype.hasOwnProperty(_name)) {
// 					_NewClass.prototype[_name] = parentPrototype[_name];
// 				}
// 			}
// 		}
		
// 		function polymorph(thisFunction, parentFunction) {
// 			return function() {
// 				var output;
// 				this.__parent = parentFunction;
// 				output = thisFunction.apply(this, arguments);
// 				delete this._parent;
// 				return output;
// 			};
// 		}
// 	}
// }());

var objA = {
	methodA: function() {
		console.log(this);
		var that = this;
		function scopeChange() {
			console.log(that);
		}
		scopeChange();
	}
};

var objB = {
	methodB: function() {
		console.log(this);
		var that = this;
		function scopeChange() {
			console.log(that);
		}
		scopeChange();
	}
};

// objA.methodA();
// objB.methodB();

function scopeTestings() {
	// this.prop = "prop...";
	console.log(this);
	function inner() {
		// console.log(this);
		function innerInner() {
			// console.log(this);
		}
		innerInner();
	}
	inner();
}
// ();

