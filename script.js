function operator(char) {
    return ['+', '-', '*', '/', '×', '÷'].includes(char);
}

function display(val) {
    let result = document.getElementById("result");
    if (operator(val) && operator(result.value.slice(-1))) {
        return;
    }
    if (val === "-" && (result.value === "" || operator(result.value.slice(-1)))) {
        result.value += val;
        return;
    }
    if (result.value === "" && operator(val)) {
        return;
    }
    result.value += val;
}

function c() {
    document.getElementById("result").value = "";
}

function solve() {
    let x = document.getElementById("result").value;
    x = x.replace(/x/g, "*").replace(/÷/g, "/");
    try {
        let res = eval(x);
        document.getElementById("result").value = res;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function myFunction(event) {
    const validKeys = "0123456789+-/*x.";
    const result = document.getElementById("result");
    const lastChar = result.value.slice(-1);

    switch (event.key) {
        case 'Enter':
        case '=':
            solve();
            break;
        case 'Backspace':
        case 'Delete':
            c();
            break;
        case 'x':
        case '*':
            if (!operator(lastChar)) {
                result.value += "×";
            }
            break;
        case '/':
            if (!operator(lastChar)) {
                result.value += "÷";
            }
            break;
        default:
            if (validKeys.includes(event.key)) {
                display(event.key);
            }
            break;
    }
}

document.addEventListener("keydown", myFunction);
