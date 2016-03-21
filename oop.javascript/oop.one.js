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