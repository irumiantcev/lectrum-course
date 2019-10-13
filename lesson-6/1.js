/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

function forEach(array, callback) {
    if (arguments.length !== 2) {
        throw new Error(`Wrong number of arguments`);
    }

    if (!Array.isArray(array)) {
        throw new Error(`Argument ${array} is not an array`);
    }

    if (typeof callback !== 'function') {
        throw new Error(`Argument ${callback} is not a function`);
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;