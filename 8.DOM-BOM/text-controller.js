// variables
const fonts = ["Helvetica", "Snap ITC", "Vladimir Script", "Century Gothic", "Tohoma"];

// selectors
const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

// set font to select option
fonts.forEach(font => {
    fontFamily.append(new Option(font, font));
});

/**
 * Application Logic
 */

// show text on output
text.addEventListener("keyup", event => {
    output.innerText = event.target.value;
    count.innerText = event.target.value.length;
});

// change text color
color.addEventListener("change", event => {
    output.style.color = event.target.value;
});

// change text font size
fontSize.addEventListener("change", event => {
    output.style.fontSize = event.target.value <= 16 ? '16px' : event.target.value + 'px';
});

// change font family
fontFamily.addEventListener("change", event => {
    output.style.fontFamily = event.target.value;
});