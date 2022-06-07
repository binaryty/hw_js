"use strict";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Функция выводит на печать массив чисел в фаормате:
 *  0 – это ноль
 *  1 – нечетное число
 *  2 – четное число
 *  3 – нечетное число
 *  …
 *  10 – четное число
 * @param {number} array 
 */
function printArray(array) {
     for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            console.log(`${array[i]}-это ноль`);
        } else if (array[i] % 2 === 0) {
            console.log(`${array[i]}-четное число`);
        } else {
            console.log(`${array[i]}-нечетное число`);
        }
     }
}

printArray(numbers);