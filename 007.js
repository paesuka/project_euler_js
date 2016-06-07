// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function* primes() {
    let seq = numbers(2);
    let prime;
    while (true) {
        prime = seq.next().value;
        yield prime;
        seq = filter(seq, prime);
    }
}

function* numbers(start = 0) {
    while (true) {
        yield start++;
    }
}

function* filter(seq, prime) {
    for (let num of seq) {
        if (num % prime !== 0) {
            yield num;
        }
    }
}

function* take(count, seq) {
  for(let i = 0; i < count; i++) {
    yield seq.next().value;
  }
}

function getPrimeThingy(){
  let [...primeSeq] = take(10001, primes());
  return primeSeq[primeSeq.length - 1];
}

console.log(getPrimeThingy());
