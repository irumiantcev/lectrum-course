/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение

function getDivisors(n){
	if (arguments.length === 0)
		throw new Error(`Insufficient arguments`);

	if (typeof n !== 'number')
		throw new Error(`Argument ${n} is not a number`);

	if (n < 1)
		throw new Error(`Number ${n} is out of range`);	

	if (!Number.isInteger(n))
		throw new Error(`Number ${n} is not integer`);

	const divisors = [];
	let i = 1;

	do {
		if (n % i === 0)
			divisors.push(i);
	} while (i++ !== n);

	return divisors;
}


const example1 = getDivisors(12); // [1, 2, 3, 4, 6, 12]

console.log(example1);

exports.getDivisors = getDivisors;