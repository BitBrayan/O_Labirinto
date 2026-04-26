const speed = 40;

function escrever() {
    const elemento = document.getElementById("typing");

    if (!elemento) return;

    const texto = elemento.dataset.texto;
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, speed);
        } else {
            document.querySelector("ul").style.opacity = "1";
        }
    }

    digitar();
}

escrever();