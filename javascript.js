var frame = document.getElementById("text");
var a;
var operation;

function appendNumber(num) {
    frame.value += num;
}

function buttonAdd() {
    setOperation("+");
}

function buttonSub() {
    setOperation("-");
}

function buttonMul() {
    setOperation("x");
}

function buttonDiv() {
    setOperation("/");
}

function setOperation(op) {
    if (a !== undefined) {
        operation = op;
        frame.value = "";
    } else {
        a = Number(frame.value);
        operation = op;
        frame.value = "";
    }
}

function buttonClear() {
    frame.value = "";
    a = undefined; // Reset 'a' when clearing
}

function removeLastDigit() {
    frame.value = frame.value.slice(0, -1); // Eliminar el último dígito
}


function buttonRes() {
    if (operation && a !== undefined) {
        var b = Number(frame.value);
        switch (operation) {
            case "+":
                frame.value = a + b;
                break;
            case "-":
                frame.value = a - b;
                break;
            case "x":
                frame.value = a * b;
                break;
            case "/":
                frame.value = a / b;
                break;
        }
        a = undefined; // Reset 'a' after calculation
    }
}

// Asignar eventos a los botones numéricos
for (let i = 0; i <= 9; i++) {
    document.getElementById(`number${i}`).addEventListener('click', () => appendNumber(i));
}

document.getElementById('punto').addEventListener('click', () => appendNumber('.'));
