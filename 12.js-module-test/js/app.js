import Square from "./sq.js";
import * as rec from "./rec.js"

const square = new Square();

console.log(square.testName);
console.log(square.area(5));

console.log(rec.shapeName);
console.log(rec.shapeHeight);
console.log(rec.area(20, 60));