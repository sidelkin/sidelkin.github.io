'use strict';

// import {fib} from "./main2.js"
// document.body.innerHTML = fib(n);

/**
 * возвращает дробную часть числа
 * @param {number} задается число
 * @returns {number} - возвращает дробную часть числа
 */
function getDecimal(a){
    let b = Math.floor(a);
    return a-b;
}

/**
 * возвращает строку с заглавным первым символом
 * @param {string} задается строка
 * @returns {string} - возвращает строку с заглавным первым символом
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * которая возвращает true, 
 * если строка str содержит 'viagra' или 'XXX', 
 * а иначе false
 * @param {string} задается строка
 * @returns {string} - возвращает булево значение
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * возвращает строку с заглавным первым символом
 * @param {string} задается строка
 * @param {number} задается максимальная длина
 * @returns {string} - усеченная строка
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '\u2026' : str;
}

/**
 * удаляет дефисы и ставит после них
 * заглавную букву
 * @param {string} задается строка
 * @returns {string} - измененная строка
 */
function camelize(str) {
    return str
        .split('-')
        .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

/**
 * возвращает массив, 
 * заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} задается число
 * @returns {array} - возвращается массив
 */
function fibs(n){
    let arr = [];
    for (let i = 0;i<n;i++){
        arr.push(fib(i));
    }
    return arr;
}

/**function fib(n){
    let a = 0n;
    let b = 1n;
    if (n == 0){
        return 0n;
    }
    for (let i = 2;i<=n;i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}*/

/**
 * возвращает массив из тех же элементов, 
 * но отсортированный по убыванию
 * @param {array} задается число
 * @returns {array} - возвращает массив
 */
function arrReverseSorted(arr){
    let nArr = arr.slice();
    nArr.sort((a,b)=> (b - a));
    return nArr;
}

/**
 * возвращает сумму всех своих аргументов
 * @returns {number} сумму
 */
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}