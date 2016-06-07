// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function* numbers(start = 0) {
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

let [...sequence] = take(1000, numbers());

let sum = sequence.filter((elem) => multiple(elem)).reduce((sum, elem) => sum += elem);

console.log(sum);
