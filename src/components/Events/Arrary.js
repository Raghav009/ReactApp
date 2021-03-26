const carsWithPrice = [
    { brand: "Audi", price: 25 },
    { brand: "Porsche", price: 20 },
    { brand: "Audi", price: 16 },
    { brand: "Audi", price: 8 }
];

let list = carsWithPrice.map(e => {
    console.log(e)
    e.newPrize = e.price * 2;
    return e;
})

console.log(list)
let fil = carsWithPrice.filter(x => x.price > 16);

let MapFill = carsWithPrice.map(e => {
    if (e.price > 16) {
        return e;
    }
})

carsWithPrice.forEach(e => {
    if (e.price > 20) {
        e.price = e.price + 10;
    }
})

console.log(carsWithPrice);

console.log(MapFill)



let A = [
    {
        veg: "carrot",
        price: 20,
        kgs: 50,
    },
    {
        veg: "carrot1",
        price: 5,
        kgs: 20,
    },
    {
        veg: "carrot2",
        price: 10,
        kgs: 40,
    },
];

let c = A.filter(x => x.price > 5).map(x => x.veg);

let arr = [];

A.forEach(x => {
    if(x.price > 5){
        arr.push(x.veg)
    }
})

var t = 'test'

let s = A.filter(x => x.veg == t);

s // results 

console.log(c)

console.log('end')