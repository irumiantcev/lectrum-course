/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(string) {
	if (typeof string === 'string'){
		const firstLetterUpper = string.slice(0,1).toUpperCase();
		const otherLetters = string.slice(1);
		return firstLetterUpper + otherLetters;
	}else{
		return false;
	}
}

const example1 = upperCaseFirst('pitter'); // Pitter
const example2 = upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;

console.log(example1);
console.log(example2);