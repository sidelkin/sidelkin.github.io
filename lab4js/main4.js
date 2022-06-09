'use strict'

/**
 * выводит название и цену книги
 */
function showBook(){
    console.log(this.title + " - " + this.price);
}

/**
 * возвращает true, если в объекте нет свойств 
 * и false – если хоть одно свойство есть.
 * @param {object} объект
 * @returns {boolean} имеет свойства или нет
 */

function isEmptyFull(object){
  if (Reflect.ownKeys(object).length == 0){
            return true;
	    }
	    else{
	     return false;
        }
    
}


function isEmpty(object){
    for (let key in object) {
         return false;
   
    }
    return true;
}

function b(object){
  console.log(Reflect.ownKeys(object));
  
}

/**
 * сортирует массив объектов people по полю age
 * @param {array} задается массив
 */
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

/**
 * возвращает, сколько секунд прошло с начала сегодняшнего дня
 * @returns число в секундах
 */
function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today;
    return Math.round(diff / 1000); 
}

/**
 * 
 * @param {array} вводится дата 
 * @returns выводит дату в формате дд.мм.гг
 */
function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}