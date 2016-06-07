// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function greatestPrimeFactor() {
    let num = 600851475143;
    while (true) {
        let prime = smallestPrimeFactor(num);
        if (num <= prime) {
            return num;
        } else {
            num = num / prime;
        }
    }
}

function smallestPrimeFactor(num) {
    let biggestPossiblePrime = Math.floor(Math.sqrt(num) + 1);
    for (let prime of primes()) {
        if (num % prime === 0) {
            return prime;
        } else if(biggestPossiblePrime < prime) {
          break;
        }
    }
    return num;
}

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

console.log(greatestPrimeFactor());
