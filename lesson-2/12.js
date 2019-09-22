const array = [1, 2, 5, 9, 4, 13, 4, 10];

for (let value of array) {
	if (value === 4){
		console.log('Есть!');
		break;
	}
}