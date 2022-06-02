"use strict";

//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75 ;
};

//es6
class newProduct{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price *= 0.75 ;
    }
}



const p1 = new Product('Ноутбук', 34500);
const p2 = new newProduct('Кроссовки', 4599);
console.log(p1);
console.log(p2);
console.log('Распродажа -25%');
p1.make25PercentDiscount();
p2.make25PercentDiscount();
console.log(p1);
console.log(p2);



