/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

function f(n) {
	if (arguments.length === 0)
		throw new Error (`No arguments`);
	
	if (typeof n !== 'number')
		throw new Error(`Argument ${n} is not a number`);

	const cube = n ** 3;

	return cube;
}

console.log(f(2)); // 8

exports.f = f;