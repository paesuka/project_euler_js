function* numbers(start) {
    while (true) {
        yield start++;
    }
}

function* take(count, seq) {
  for(let i = 0; i < count; i++) {
    yield seq.next().value;
  }
}

function multiple(num) {
  return num % 3 === 0 || num % 5 === 0;
}

let [...sequence] = take(1000, numbers(0));

let sum = sequence.filter((elem) => multiple(elem)).reduce((sum, elem) => sum += elem);

console.log(sum);
