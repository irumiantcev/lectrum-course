/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(source, example){
	if (typeof source === 'string' && typeof example === 'string'){
		source = source.toLowerCase();
		example = example.toLowerCase();
		return source.includes(example);
	}else{
		return false;
	}
}

const example1 = checkSpam('pitterXXX@gmail.com', 'xxx'); // true
const example2 = checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;

console.log(example1);
console.log(example2);