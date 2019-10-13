/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isPositive(n) {
    if (arguments.length === 0) {
        throw new Error(`Insufficient arguments`);
    }

    if (typeof n !== 'number') {
        throw new Error(`Argument ${n} is not a number`);
    }

    if (Math.sign(n) === 1) {
        return true;
    } else if (Math.sign(n) === -1) {
        return false;
    } else {
        throw new Error(`Failed to check number`);
    }
}

const example1 = isPositive(-3); // false
const example2 = isPositive(3); // true
//const example3 = isPositive(0);


console.log(example1);
console.log(example2);
//console.log(example3);

exports.isPositive = isPositive;