"use strict";

/**
 * Функция проверяет число на соответствие критериям:является числом в диапазоне 0 до 999
 * @param {number} number  
 * @returns {boolean}
 */
function checkNumber(number) {
    if (Number.isInteger(number)) {
        return true;
    }
    if (number > 0) {
        return true;
    }
    if (number < 999) {
        return true;
    }
    return false;
}

/**
 * Функция конвертирует число в объект
 * @param {number} number
 * @return {object} 
 */
function makeObject(number) {
    if (!checkNumber(number)) {
        console.log('Необходимо ввести число в диапазоне от 0 до 999');
    }
    
    return {
        units: number % 10,
        tens: Math.floor(number / 10 % 10),
        hundres: Math.floor(number / 100),
    };
}

let num = parseInt(prompt('Введите число в диапазоне от 0 до 999'));

console.log(makeObject(num));