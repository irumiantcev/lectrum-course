/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение

const getCustomers = (customers, countries) => {
    const promise = new Promise((resolve, reject) => {
        const customersVerified = customers.filter(item => item.verified && typeof item.verified === 'boolean');
        const result = [];

        for (const customerObject of customersVerified) {
            const countryObject = countries.find(item => item.id === customerObject.id);

            if (!countryObject) {
                reject(`We don't have information about country for this customer: ${customerObject.name}`);
            }

            result.push({ ...customerObject, ...countryObject });
        }

        resolve(result);
    });

    return promise;
};


// Пример использования

const customers = [{
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [{
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error));