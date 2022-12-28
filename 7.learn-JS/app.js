/**
 * JavaScript OOP Concepts => Class, Object, Inheritance, Method Chain
 * Built-in Objects => Date, 
 */

class Person {
  constructor(name, major, age, gender) {
    this.name = name;
    this.major = major;
    this.age = age;
    this.gender = gender;
  }
};

let p1 = new Person("Thaw Thaw", "Bio", 16, "Female");

console.log(p1);


// Method Chain
class A {

    constructor() {
        console.log("Testing Method Chaining");
    }
    x() {
        console.log("This is x method");
        return this;
    }

    y() {
        console.log("This is y method");
        return this;
    }

    z() {
        console.log("This is z method");
        return this;
    }
}

const objA = new A();
objA.x().y().z();


// JavaScript Built-in Object

let date = new Date();
console.log(date);


// JavaScript Built-in Methods
let str = "120.54kg";

console.log(parseInt(str));
console.log(parseFloat(str));

console.log(`Using eval() : ${eval("3 + 4")}`);

/**
 * 	JS OOP => Class, Object, Inheritance, Method Chain
	JS Built-in Objects => Date, String, Number, Math, Array, Function, eval(),
				parseFloat(), parseInt(), isFinite(), isNaN()
				
	Useful Prototype Methods

		. String Methods
			. length property
			. substr(start, length)
			. search()
			. replace()
			. toUpperCase(), toLowerCase()
			. trim()
			. padStart(), padEnd()
			. split()

		. Methods for Object
			. keys()
			. values()

		. Number Methods
			. toString()
			. toFixed()
			. toPrecision()
			. Number()
			. parseInt()
			. parseFloat()
			. Math.random(), Math.floor()
			. Math.ceil()

		. Array Methods
			. length property
			. toString(), join()
			. push(), pop(), shift(), unshift()
			. sort(), reverse()

    Callback Function
        A callback function is a function passed into another function as an argument, which is then invoked
        inside the outer functio to complete some kind of routine or action.

        fuction greeting(name) {
            alert(`Hello , ${name});
        }

        function processUserInput(callback) {
            const name = prompt("Please enter your name.");
            callback(name);
        }

        processUserInput(greeting);


    Arrow Funtion
        param => expression
        (param) => expression
        (param1, param2) => expression
        param => {statement}
        (param1, param2) => {statement}
 */

// Callback funtion

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function greetUserInput(callback) {
//     const inputName = prompt("Enter your name.");
//     callback(inputName);
// }

// greetUserInput(greet);


const obj = {
    a: "this is a",

    b: function() {
        console.log(this);
        return "this is b";
    },

    c: () => {
        console.log(this); // if you call 'this' in callback will return 'Window' object 
        return "this is c";
    }
};

console.log(obj.a); // this is a
console.log(obj.b()); // {a: 'this is a', b: ƒ, c: ƒ} and this is b
console.log(obj.c()); // Window {window: Window, self: Window, document: document, name: '', location: Location, …} and this is c


// Function is a Prototype
