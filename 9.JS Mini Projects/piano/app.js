const sounds = [
    {
        id: 1,
        name: "C4",
        keyCode: 65,
    },
    {
        id: 2,
        name: "D4",
        keyCode: 83,
    },
    {
        id: 3,
        name: "E4",
        keyCode: 68,
    },
    {
        id: 4,
        name: "F4",
        keyCode: 70,
    },
    {
        id: 5,
        name: "G4",
        keyCode: 74,
    },
    {
        id: 6,
        name: "A4",
        keyCode: 75,
    },
    {
        id: 7,
        name: "B4",
        keyCode: 76,
    },
    {
        id: 8,
        name: "C5",
        keyCode: 186,
    },
];

const row = document.querySelector(".row");


// create piano key UI
const createKey = ({name}) => {
    const div = document.createElement("div");
    div.classList.add("col",
        "key",
        "border",
        "border-dark",
        "py-5",
        "d-flex",
        "justify-content-center",
        "align-items-center"
    );
    div.setAttribute("sound", name);
    div.innerText = name;
    return div;
};

// create key button for each sound
sounds.forEach((sound) => {
    row.append(createKey(sound));
});

// play function for each key button
const play = (name) => {
    const audio = new Audio(`./sound/${name}.mp3`);// create Audio
    const el = document.querySelector(`[sound=${name}]`);// attribute selector
    el.classList.add("active");
    console.log(el);

    // remove 'active' class from key
    setTimeout(() => el.classList.remove("active"), 200);

    audio.play();
};

// client clicks the key
row.addEventListener("click", event => {
    if (event.target.classList.contains("key")) {
        const currentSound = event.target.getAttribute("sound");
        console.log(currentSound);
        play(currentSound);
    }
});

// client press keys
document.addEventListener("keyup", event => {
    const current = sounds.find(({keyCode}) => keyCode === event.keyCode);
    if (current) {
        console.log(current.keyCode);
        play(current.name);
    }
});