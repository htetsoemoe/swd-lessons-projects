// input
const area = (w, b) => {
    return parseFloat(w) * parseFloat(b) + " sqft";
}

const width = window.prompt("Enter Width");
const breadth = window.prompt("Enter Breadth");

window.alert(area(width, breadth));
