const arr = [1, 2, 3, 4, 5, 6];

let arrReverse = [];

let arrLength = arr.length;

for (let value of arr) {
    arrLength--;
    arrReverse[arrLength] = value;
}