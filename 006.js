// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and
// the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sq(a) {
  return a * a;
}

function* numberSequece(start = 0, end = Number.MAX_SAFE_INTEGER) {
  while(start <= end) {
    yield start++;
  }
}

function diffBetweenSquareAndSumSquare() {
  let [...sumSquareSeq] = numberSequece(1, 100);
  let [...squareSumSeq] = numberSequece(1, 100);
  let sumSquare = sumSquareSeq.map(elt => sq(elt)).reduce((sum, elt) => sum += elt);
  let squareSum = sq(squareSumSeq.reduce((sum, elt) => sum += elt));
  return squareSum - sumSquare;
}

console.log(diffBetweenSquareAndSumSquare());
