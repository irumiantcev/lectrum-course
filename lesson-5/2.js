/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f() {
	if (arguments.length === 0)
		throw new Error (`No arguments`);

	let sum = 0;
	for(const item of arguments){
		if (typeof item !== 'number')
			throw new Error (`Argument ${item} is not a number`);
		sum += item;
	}

	return sum;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;