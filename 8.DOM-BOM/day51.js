/**
 * 		Event Handling
				- html attribute	<button onclick="alert(`Hello event attribute`)"></button>
				- property		document.querySelector("#btn").onclick = () => alert(`Hello I'm event property`);
				- method		document.querySelector("#btn").addEventListener('click', () => alert(`Hello I'm event method`));
 */

// const showAlert = () => alert(`Hello I'm btn click event.`);

// const btn = document.querySelector("#btn");
// btn.onclick = showAlert;


// Mouse Event
const h1 = document.querySelector("h1");
h1.addEventListener('mouseenter', () => console.log("Mouse Enter Event"));
h1.addEventListener('mouseout', () => console.log("Mouse Out Event"));
h1.addEventListener('mousemove', () => console.log("Mouse Move Event"));


// Key Event
const inputText = document.querySelector("#textInput");
inputText.addEventListener('keydown', () => console.log("KeyDown Event"));
inputText.addEventListener('keypress', () => console.log("KeyPress Event"));
inputText.addEventListener('keyup', () => console.log("KeyUp Event"));

// change event
const date = document.querySelector("#date");
date.addEventListener('change', () => console.log("Change Event"));

const select = document.querySelector("#select");
select.addEventListener('change', () => console.log("Change Event"));


// form submit event 
const form = document.querySelector("form");
form.addEventListener('submit', () => console.log("Form Submit Event"));

// scroll event
// on window
window.addEventListener('scroll', () => console.log("You scroll on window"));


// on html element
document.querySelector("#box").addEventListener('scroll', () => console.log("You scroll on div"));


// loaded event
// load event worked as the last event
window.addEventListener('load', () => console.log('Page Loaded...'));

console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");

// get event target object
document.querySelector("#select").addEventListener("click", e => console.log(e));
