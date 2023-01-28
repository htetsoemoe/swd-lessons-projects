// variables
const fonts = ["Helvetica", "Snap ITC", "Vladimir Script", "Century Gothic", "Tohoma"];

// selectors
const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const speechToText = document.querySelector("#speechToText");
const textToSpeech = document.querySelector("#textToSpeech");

// variable for text to speech
const synth = window.speechSynthesis;

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

/**
 *  Functions for TextToSpeech using Web Speech API
 */

const speak = text => {
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.rate = 0.8;
    utterThis.text = text;
    utterThis.voice = synth.getVoices()[1];

    utterThis.addEventListener("start", () => {
        textToSpeech.classList.add("active");
    });

    utterThis.addEventListener("end", () => {
        textToSpeech.classList.remove("active");
    });

    synth.speak(utterThis);
};

textToSpeech.addEventListener("click", () => {
    speak(text.value);
});

/**
 *  Functions for SpeechToText using Speech Recognition API
 * 
 */

const listen = () => {
    var recognition = new webkitSpeechRecognition();

    // Set the language and start recognizing
    recognition.lang = "en-US";
    recognition.start();

    // When a speech result is returned
    recognition.onresult = function (event) {
        // Get the transcript of the spoken words
        // console.log(event.results);
        var transcript = event.results[0][0].transcript;
        text.value += transcript;
    };

    recognition.addEventListener("start", () => {
        speechToText.classList.add("active");
        speechToText.innerHTML = `
            <div class="spinner-border text-white spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `;
    });

    recognition.addEventListener("end", () => {
        speechToText.classList.remove("active");
        speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
    });
};

speechToText.addEventListener("click", listen);
