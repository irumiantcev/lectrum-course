/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

function f(a, b, c) {
    if (arguments.length < 3) {
        throw new Error(`Insufficient arguments`);
    }

    for (const item of arguments) {
        if (typeof item !== 'number') {
            throw new Error(`Argument ${item} is not a number`);
        }
    }

    const result = (a - b) / c;

    return result;
}

console.log(f(9, 3, 2)); // 3

exports.f = f;