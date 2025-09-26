function operate(a, operator, b) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            return  a/b
}
}

function display(courant) {
    document.querySelector("#res").value = courant || "0";
}

function clear() {
    document.querySelector("#clear").addEventListener("click", function () {
        display("0");
        courant = "";
        a = null;
        b = null;
        operator = null;
    });
}

let courant = "";
let a = null;
let b = null;
let operator = null;

function calculate() {
    document.querySelectorAll(".num").forEach((btn) => {
        btn.addEventListener("click", () => {
            courant += btn.value;
            display(courant);
        });
    });
    document.querySelectorAll(".signe").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (a === null) {
                a = parseFloat(courant);
            } else if (courant !== "") {
                b = parseFloat(courant);
                a = operate(a, operator, b);
                display(a);
            }
            operator = btn.value;
            courant = "";
        });
    });
    document.querySelector("#egale").addEventListener("click", () => {
        if (a !== null && operator && courant !== "") {
            b = parseFloat(courant);
            a = operate(a, operator, b);
            if (a===Infinity)
            display("impossible");
            else
            display(a)
            courant = "";
            operator = null;
        }
    });

    clear();
}

calculate();
