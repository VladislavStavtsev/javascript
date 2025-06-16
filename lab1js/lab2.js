function countCrows() {
    const num = parseInt(document.getElementById('num').value);

    if (isNaN(num)) {
        alert("Пожалуйста, введите целое число.");
        return;
    }

    let message = "На ветке сидит ";
    message += num + " ";


    switch (num % 10) {
        case 1:
            if (num % 100 === 11) {
                message += "ворон";
            } else {
                message += "ворона";
            }
            break;
        case 2:
        case 3:
        case 4:
            if (num % 100 >= 12 && num % 100 <= 14) {
                message += "ворон";
            } else {
                message += "вороны";
            }
            break;
        default:
            message += "ворон";
    }
    alert(message);
}