const array = [2, -1, -3, 15, 0, 4];

let sum = 0;

for (let value of array) {
    if (value > 0) {
        sum += value;
    }
}