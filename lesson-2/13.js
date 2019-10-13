let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}

console.log(`Число ${n}`);
console.log(`Кол-во итераций ${num}`);