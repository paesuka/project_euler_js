function *fibonacci(treshhold = 0, current = 0, next = 1) {
  if(current < treshhold) {
    yield current;
    yield *fibonacci(treshhold, next, current + next);
  }
}

let [...fibo] = fibonacci(4000000);
let sum = fibo.filter(ele => ele % 2 === 0).reduce((sum, ele) => sum += ele);
console.log(sum);
