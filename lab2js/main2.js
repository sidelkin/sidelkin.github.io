'use strict';
/**
 * считается степень числа
 * @param {number} x возводимое в степень число
 * @param {number} n Степень - натуральное
 * @return {number} - число x в стпени n
 */
function pow(x, n){
    return x**n;
}

/**
 * вычисляет сумму чисел от 1 до n включительно
 * @param {number} n число до которого ведётся сумма
 * @param {number} sum сумма чисел от 1 до n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * считается факториал числа
 * @param {number} n число для факториала
 * @return {number}  - возращает n-1 для рекурсивного умножения до 1 
 */
function factorial(n) {
    if(n!=0) return (n * factorial(n - 1));
    else return 1;
}
		
/**
 * считается n-е число Фибоначчи
 * @param {number} n - число чисел Фибоначи* 
 * @return {number} - n-ное число Фибоначи
 * 
 */
 function fib(n){
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
}

/**
 * возращается анонимная функция сравнения аргумента y
 * с x : false если y<x, true если y>x, иначе null
 * @param {numeric} x - число х 
 * @returns {function} - функция сравнения
 * 
 */		
function compare(x){
    return function (y) {
        if(y>x) return true
        else if (y<x) return false
        else if (y == x) return null;
    }
}

/**
 * 
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - на вывод
 * 
 */
function printNumbers(num,cols){
    let rows = num / cols;
    for (let row = 0; row < rows; ++row){ 
        let str = ''; 
        for (let col = 0; col < cols; ++col){ 
            str += (row + rows * col) + ' '; 
        } 
        console.log(str); 
    }
}