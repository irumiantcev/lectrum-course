/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(array, callback){
	if (arguments.length !== 2)
		throw new Error(`Wrong number of arguments`);

	if (!Array.isArray(array))
		throw new Error(`Argument ${array} is not an array`);

	if (typeof callback !== 'function')
		throw new Error(`Argument ${callback} is not a function`);
    
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array))
        	return false;
    }

    return true;
}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;