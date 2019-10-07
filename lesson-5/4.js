/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение

function f(n){
	if (arguments.length === 0) {
		throw new Error(`Insufficient arguments`);
	}

	if (typeof n !== 'number') {
		throw new Error(`Argument ${n} is not a number`);
	}

	if (n < 1 || n > 7) {
		throw new Error(`Number ${n} is out of range`);	
	}

	if (!Number.isInteger(n)) {
		throw new Error(`Number ${n} is not integer`);
	}

	switch (n) {
		case 1:
			return 'Воскресенье';
		case 2:
			return 'Понедельник';
		case 3:
			return 'Вторник';
		case 4:
			return 'Среда';
		case 5:
			return 'Четверг';
		case 6:
			return 'Пятница';
		case 7:
			return 'Суббота';
	}
}

const example1 = f(1); // Воскресенье
const example2 = f(4); // Среда

console.log(example1);
console.log(example2);

exports.f = f;