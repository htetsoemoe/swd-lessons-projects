const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

calculate.onclick = () => {
    // calculate area
    const area = width.valueAsNumber * breadth.valueAsNumber;

    // set area to result 
    result.innerText = `W : ${width.value} ft * B : ${breadth.value} ft = ${area} sqft`;

    // set null value to width and breadth
    width.value = breadth.value = null;
};

clear.onclick = () => result.innerText = null ;

store.onclick = () => {
    records.innerHTML += `<li>${result.innerText}</li>`;
    result.innerText = null;
}
