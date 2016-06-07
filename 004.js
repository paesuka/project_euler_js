// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function* numbers(start = Number.MAX_VALUE, end = 0) {
    while (start >= end) {
        yield start--;
    }
}

function isPalindrome(num) {
  return num.toString() === num.toString().split('').reverse().join('');
}

function findPali() {
  let n = 0;
  for (let leftProduct of numbers(999, 100)) {
    for (let rightProcut of numbers(leftProduct, 100)) {
      let product = leftProduct * rightProcut;
      if(product > n && isPalindrome(product)) {
        n = product;
      }
    }
  }
  return n;
}
console.log(findPali());
