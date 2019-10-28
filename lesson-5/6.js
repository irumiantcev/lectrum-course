/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isEven(n) {
    if (arguments.length === 0) {
        throw new Error(`Insufficient arguments`);
    }

    if (typeof n !== 'number') {
        throw new Error(`Argument ${n} is not a number`);
    }

    const result = n % 2 === 0;

    return result;
}

const example1 = isEven(3); // false
const example2 = isEven(4); // true

console.log(example1);
console.log(example2);

exports.isEven = isEven;