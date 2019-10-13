/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, count){
	if (arguments.length < 2) {
		throw new Error(`Wrong number of arguments`);
	}

	if (typeof value !== 'number' && typeof value !== 'string'  && typeof value !== 'object' && !Array.isArray(value) || value === null) {
		throw new Error(`${value} - Invalid argument type`);
	}

	if (typeof count !== 'number') {
		throw new Error(`Argument ${count} is not a number`);
	}	

	const result = new Array(count).fill(value);

	return result;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;