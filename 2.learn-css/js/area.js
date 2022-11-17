const records = [];

function calcArea(width, length) {
    let area = (width * length) + ' sqft';
    let data = {
        width: width + ' ft',
        length: length + ' ft',
        area: area + ' ft'
    }
    records[records.length] = data;

    return area;
}

console.log(calcArea(20, 60));
console.log(calcArea(40, 60));
console.log(calcArea(60, 60));


console.table(records);