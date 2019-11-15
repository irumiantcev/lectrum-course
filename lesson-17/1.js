/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    const validate = (num) => {
        if (typeof num !== 'number') {
            throw new Error(`Argument ${num} must be a number`);
        }
    };

    const print = (num) => {
        console.log(num);
    };

    for (const num of arguments) {
        validate(num);
    }

    const counterStart = start;
    const counterEnd = end;
    let delayTime = delay;
    const direction = counterStart <= counterEnd;

    for (let i = counterStart; direction ? i <= counterEnd : i >= counterEnd; direction ? i++ : i--) {
        setTimeout(print, delayTime, i);
        delayTime += delay;
    }

}


postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;