function hisobla(amal) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let natija = document.getElementById("natija");

    if (isNaN(num1) || isNaN(num2)) {
        natija.innerText = "Iltimos, son kiriting!";
        return;
    }

    let result;
    switch (amal) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "0 ga bo‘lib bo‘lmaydi!";
            break;
        default:
            result = "Xatolik!";
    }

    natija.innerText = result;
}
