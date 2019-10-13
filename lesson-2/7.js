const array = [1, 2, 3, 4];

let sum = 0;

for (let value of array) {
    if (value % 2 === 0) {
        sum += value;
    }
}