function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b)
}

function dividableByRandomNumbers() {
    let n = 1;
    for (divisor of divisors()) {
      n = lcm(n, divisor);
    }
    return n;
}

function divisors() {
    let seq = [];
    for (let i = 20; i > 0; i--) {
        if (seq.every(elem => elem % i !== 0)) {
            seq.push(i);
        }
    }
    return seq;
}

console.log(dividableByRandomNumbers());
