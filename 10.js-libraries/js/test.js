const heros = [
    'Iron Man', 'Bat Man', 'Spider Man', 'Super Man', 'Ant Man', 'Rambo'
];

console.log(_.chunk(heros, 3));

const name = 'to be with you';
console.log(_.camelCase(name));

const time = moment();
console.log(time.format("D MMM Y"));

axios("https://dummyjson.com/products/1")
.then(response => console.log(response.data));
