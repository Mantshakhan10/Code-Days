function validate() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let error = document.getElementById("error");

    if (n1 === "" || n2 === "") {
        error.textContent = "Please enter both numbers.";
        return false;
    }

    error.textContent = "";
    return true;
}

function add() {
    if (!validate()) return;
    let r = Number(num1.value) + Number(num2.value);
    result.textContent = r;
}

function sub() {
    if (!validate()) return;
    let r = Number(num1.value) - Number(num2.value);
    result.textContent = r;
}

function mul() {
    if (!validate()) return;
    let r = Number(num1.value) * Number(num2.value);
    result.textContent = r;
}

function div() {
    if (!validate()) return;
    let r = Number(num1.value) / Number(num2.value);
    result.textContent = r;
}
