'use strict'
const form = document.getElementById('pensionForm');
const resultTextarea = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    let message = "";
    console.log("Введённые данные:", {age, gender});
    if (isNaN(age)) {
        message = "Введите корректный возраст.";
    } else if (age >= 0 && age <= 17) {
        message = "Вам работать ещё рано — учитесь";
    } else if (
        (gender === "male" && age >= 18 && age <= 59) ||
        (gender === "female" && age >= 18 && age <= 54)
    ) {
        message = "Вам ещё работать и работать";
    } else if (
        (gender === "male" && age >= 60 && age < 65) ||
        (gender === "female" && age >= 55 && age < 60)
    ) {
        message = "Скоро пенсия!";
    } else if (
        (gender === "male" && age >= 65) ||
        (gender === "female" && age >= 60)
    ) {
        message = "Вам пора на пенсию";
    } else {
        message = "Да кто ты такой?";
    }

    resultTextarea.value = message;
});
