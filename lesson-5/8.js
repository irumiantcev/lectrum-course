/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(arr) {
    if (arguments.length === 0) {
        throw new Error(`Insufficient arguments`);
    }

    if (!Array.isArray(arr)) {
        throw new Error(`Argument ${arr} is not an array`);
    }

    if (arr.length === 0) {
        throw new Error(`Empty array`);
    }

    console.log(arr[0]);

    arr.splice(0, 1);

    if (arr.length !== 0) {
        f(arr);
    }
}


f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;