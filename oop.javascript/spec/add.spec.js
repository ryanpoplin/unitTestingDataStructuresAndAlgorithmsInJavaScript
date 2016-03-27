const add = require("../add");

// describe("The add function", function() {
// 	it("Adds 1 + 2 + 3 correctly", function() {
// 		var output = add(1, 2, 3);
// 		expect(output).toEqual(6);
// 		expect(output).not.toEqual(7);
// 	});

// 	it("Adds negative numbers correctly", function() {
// 		var output = add(-1, -2, -3);
// 		expect(output).toEqual(-6);
// 	});

// 	it("Returns 0 if no inputs are provided", function() {
// 		var output = add();
// 		expect(output).toEqual(0);			
// 	});

// 	it("Adds only numeric inputs together", function() {
// 		var output = add(1, "1", 2, "2", 3, "3");
// 		expect(output).toEqual(6);
// 	});	
// });

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