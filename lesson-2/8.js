const array = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let value of array) {
    if (value > 3 && value % 2 === 0) {
        sum += value;
    }
}