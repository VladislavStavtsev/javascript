// 1. Функция pow(x, n)
function pow(x, n) {
    if (n > 0) {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    } else if (n === 0) {
        return 1;
    } else {
        return 1 / pow(x, -n);
    }
}

// 2. Функция sumTo(n) с использованием new Function
const sumTo = new Function('n', `
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
`);

// 3. Функция-предикат isLeapYear(year)
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// 4. Функция factorial(n) с использованием BigInt и рекурсии
function factorial(n) {
    if (n === 0) {
        return 1n;
    } else {
        return BigInt(n) * factorial(n - 1);
    }
}

// 5. Функция fib(n) для чисел Фибоначчи (быстрое вычисление)
function fib(n) {
    if (n <= 1) {
        return BigInt(n);
    }

    let a = 0n;
    let b = 1n;

    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// 6. Функция compare()
function compare(x) {
    return function (y) {
        if (y > x) {
            return true;
        } else if (y < x) {
            return false;
        } else {
            return null;
        }
    };
}

// 7. Функция sum(...)
function sum(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

// 8. Функция addBlackSpot()
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}

// Примеры использования (для проверки):
console.log("pow(2, 2):", pow(2, 2));
console.log("pow(2, 0):", pow(2, 0));
console.log("pow(2, -2):", pow(2, -2));

console.log("sumTo(100):", sumTo(100));

console.log("isLeapYear(2024):", isLeapYear(2024));
console.log("isLeapYear(2025):", isLeapYear(2025));
console.log("isLeapYear(2000):", isLeapYear(2000));
console.log("isLeapYear(1900):", isLeapYear(1900));

console.log("factorial(0):", factorial(0));
console.log("factorial(5):", factorial(5));

console.log("fib(0):", fib(0));
console.log("fib(100):", fib(100));

const compare5 = compare(5);
console.log("compare(5)(4):", compare5(4));
console.log("compare(5)(5):", compare5(5));
console.log("compare(5)(6):", compare5(6));

console.log("sum():", sum());
console.log("sum(1):", sum(1));
console.log("sum(1, 2):", sum(1, 2));

console.log("addBlackSpot({}):", addBlackSpot({}));