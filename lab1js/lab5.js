document.getElementById("drawButton").addEventListener("click", function () {
    const numRows = parseInt(document.getElementById("rows").value);
    drawTable(numRows);
});

function drawTable(numRows) {
    const animals = ["dog", "dog", "dog", "cat", "cat", "dog"];
    let tableString = "";

    for (let i = 0; i < numRows; i++) {
        let row = "";
        for (let j = 0; j < 6; j++) {
            row += animals[(i + j) % animals.length] + "\t";
        }
        tableString += row + "\n";
    }
    console.log(tableString);
}