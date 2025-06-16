'use strict'
function checkNumber() {
    while (true) {
        let input = prompt("Введите число больше 100:");

        if (input === null) {
            return false;
        }

        let num = parseInt(input);

        if (isNaN(num)) {
            alert("Пожалуйста, введите число.");
        }
        else if (num > 100) {
            return true;
        }
    }
}

const link = document.getElementById('numberLink');

link.addEventListener('click', function (event) {
    if (!checkNumber()) {
        event.preventDefault();

        if (confirm("Разрешить переход?")) {

            window.location.href = link.href;
        }
    }
});