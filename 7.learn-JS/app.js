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
