const fruits = {
    apple: 100,
    orange: 120,
    mango: 200,
    banana: 30
}

let total = 0;

function buy(fruitName, quantity) {
    let cost = quantity * fruits[fruitName];

    total += cost;
    return `${fruitName} : ${quantity} = ${cost} MMK`;
}

function tax(amount, taxRate = 0.05) {
    return amount * taxRate;
}


console.log(buy('apple', 3));

console.log("Total Cost : ", total, " MMK");
console.log("Tax : ", tax(total), " MMK");
console.log("Net Total : ", total + tax(total), " MMK");