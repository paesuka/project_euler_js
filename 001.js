let sequence = [];

for(i = 1; i < 1000; i++) {
  sequence.push(i);
}

function multiple(num) {
  return num % 3 === 0 || num % 5 === 0;
}

let sum = sequence.filter((elem, i, array) => multiple(elem)).reduce((sum, elem, i, array) => sum += elem);

console.log(sum);
