/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение


class DB {
    #count = 0;
    #map = new Map();


    create(object) {
        const params = ['name', 'age', 'country', 'salary'];

        for (const param of params) {
            if (!object.hasOwnProperty(param)) {
                throw new Error(`Property ${param} does not exist`);
            }

            if (!object[param]) {
                throw new Error(`Property ${param} is empty`);
            }

            if (param === ('name', 'country') && typeof(object[param]) !== 'string') {
                throw new Error(`Property ${param} must be a string`);
            }

            if (param === ('age', 'salary') && typeof(object[param]) !== 'number') {
                throw new Error(`Property ${param} must be a number`);
            }
        }
        const key = (this.#count++).toString();

        this.#map.set(key, object);

        return key;
    }

    read(id) {
        if (!id || typeof(id) !== 'string') {
            throw new Error(`Argument must be a string`);
        }

        if (!this.#map.has(id)) {
            return null;
        }

        const returnObj = {};
        returnObj[id] = this.#map.get(id);

        return returnObj;
    }

    readAll() {
        if (arguments.length) {
            throw new Error(`Extra argument passed`);
        }

        const returnArr = [];

        this.#map.forEach((value) => {
            returnArr.push(value);
        });        

        return returnArr;
    }

    update(id, object) {
        if (typeof(id) !== 'string') {
            throw new Error(`Argument must be a string`);
        }

        if (!this.#map.has(id)) {
            throw new Error(`Id does not exist`);
        }

        if (typeof(object) !== 'object' || object === null) {
            throw new Error(`Argument must be an object`);
        }

        if (Object.keys(object).length === 0) {
            throw new Error(`Object is not valid`);
        }

        const updateObject = this.#map.get(id);

        for (const key in object) {
            if (!updateObject[key]) {
                throw new Error(`Object is not valid`);
            }

            updateObject[key] = object[key];
        }

        return id;
    }

    delete(id) {
        if (typeof(id) !== 'string') {
            throw new Error(`Argument must be a string`);
        }

        if (!this.#map.has(id)) {
            throw new Error(`Id does not exist`);
        }

        const result = this.#map.delete(id);

        return result;
    }
}


// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person2 = {
    name: "Jack", // обязательное поле с типом string
    age: 23, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 1500 // обязательное поле с типом number
};

const id = db.create(person);
const id2 = db.create(person2);

// console.log(id);
// console.log(id2);

const customer = db.read(id);

// console.log(db.read(id));
// console.log(db.read(id2));

const customers = db.readAll(); // массив пользователей

//console.log(customers);

const updateResult = db.update(id, { age: 22 }); // id

// console.log(updateResult);
// console.log(db.readAll());

const deleteResult = db.delete(id); // true

// console.log(deleteResult);
// console.log(db.readAll());