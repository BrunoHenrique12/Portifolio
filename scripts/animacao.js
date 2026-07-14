const texto = "Bruno Henrique";
const elemento = document.getElementById("typing");

let i = 0;

function escrever() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 120);
    } else {
        setTimeout(apagar, 1500);
    }
}

function apagar() {
    if (i > 0) {
        elemento.textContent = texto.substring(0, i - 1);
        i--;
        setTimeout(apagar, 70);
    } else {
        setTimeout(escrever, 500);
    }
}

escrever();