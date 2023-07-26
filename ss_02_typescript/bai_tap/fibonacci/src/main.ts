
    let sum = 0;
    let fib1 = 0;
    let fib2 = 1;
    const n = 10;

    for (let i = 0; i <= n; i++) {
        sum += fib1;
        let nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }


const sum_ = sum
console.log(`Tổng của ${n} số Fibonacci là: ${sum_}`);
