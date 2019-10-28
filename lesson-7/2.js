/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(array) {
    if (arguments.length === 0) {
        throw new Error(`No arguments`);
    }

    if (!Array.isArray(array)) {
        throw new Error(`Argument ${array} is not an array`);
    }

    const sum = array.reduce(function(acc, value) {
        if (Array.isArray(value)) {
            acc += collect(value);
        } else {
            if (typeof value !== 'number') {
                throw new Error(`Argument ${value} is not a number`);
            }

            acc += value;
        }

        return acc;
    }, 0);

    return sum;
}

const array1 = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [2, 1],
        [1, 2]
    ]
];
console.log(collect(array1)); // 12

const array2 = [
    [
        [
            [
                [1, 2]
            ]
        ]
    ]
];
console.log(collect(array2)); // 3

const array3 = [
    [
        [
            [
                [1, 2]
            ]
        ], 2
    ], 1
];
console.log(collect(array3)); // 6

const array4 = [
    [
        [
            [
                []
            ]
        ]
    ]
];
console.log(collect(array4)); // 0

const array5 = [
    [
        [
            [
                [], 3
            ]
        ]
    ]
];
console.log(collect(array5)); // 3

exports.collect = collect;