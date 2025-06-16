document.addEventListener('DOMContentLoaded', function () {
    const nInput = document.getElementById('n');
    const findButton = document.getElementById('findButton');
    const primesDiv = document.getElementById('primes');

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    findButton.addEventListener('click', function () {
        const n = parseInt(nInput.value);
        if (isNaN(n) || n < 2) {
            alert("Пожалуйста, введите число больше 1.");
            return;
        }

        primesDiv.innerHTML = "";
        let primeNumbers = [];

        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primeNumbers.push(i);
            }
        }

        if (primeNumbers.length > 0) {
            primesDiv.textContent = primeNumbers.join(', ');
        } else {
            primesDiv.textContent = "Простые числа не найдены в данном диапазоне.";
        }

    });
});