"use strict";

/**
 *
 *Функция печати горки из n рядов по n элементов
 * @param {number} n
 */
function printSlide(n) {
    for (let i = 1; i <= n; i ++) {
            console.log('x'.repeat(i));
    }
}

printSlide(20);