"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 *
 *Функция выводит в консоль список всех продуктов
 * @param {products} array
 */
function printProducts(array) {
    array.forEach(product => {
        console.log(`Товар №${product.id} стоит ${product.price}`);
    });
}

/**
 *
 *Функция устанавливает скидку на все продукты в размере discount
 * @param {products} array Массив продуктов
 * @param {number}discount размер скидки, например 15
 */
function setDiscount(array, discount){
    array.forEach(product => {
        product.price *= 1 - discount / 100;
    });
}
console.log('Первоначальные цены')
printProducts(products);
setDiscount(products, 15);
console.log('Распродажа -15% на все')
printProducts(products);
