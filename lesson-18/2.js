/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
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

    find(object) {

        if (Object.keys(object).length === 0) {
            throw new Error(`Object is not valid`);
        }

        const resultArr = [];
        const params = ['name', 'age', 'country', 'salary'];

        this.#map.forEach((value) => {
            let find = true;

            for (const param of params) {
                if (param === 'country' && object.hasOwnProperty(param) && value[param] !== object[param]) {
                    find = false;
                    break;
                }

                if (param === 'name' && object.hasOwnProperty(param) && value[param] !== object[param]) {
                    find = false;
                    break;
                }

                if (param === 'age' && object.hasOwnProperty(param)) {
                    if (object[param].hasOwnProperty('min') && value[param] < object[param]['min']) {
                        find = false;
                        break;
                    }

                    if (object[param].hasOwnProperty('max') && value[param] > object[param]['max']) {
                        find = false;
                        break;
                    }
                }

                if (param === 'salary' && object.hasOwnProperty(param)) {
                    if (object[param].hasOwnProperty('min') && value[param] < object[param]['min']) {
                        find = false;
                        break;
                    }

                    if (object[param].hasOwnProperty('max') && value[param] > object[param]['max']) {
                        find = false;
                        break;
                    }
                }

            }

            if (find) {
                resultArr.push(value);
            }
        });

        return resultArr;
    }
}



const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person2 = {
    name: "Jack", // обязательное поле с типом string
    age: 24, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 330 // обязательное поле с типом number
};

const id = db.create(person);
const id2 = db.create(person2);



// Проверка
const query = {
    country: "ua",
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query); // массив пользователей

console.log(customers);