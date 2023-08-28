const project = document.querySelector(".project")

function digitar(texto, contador) {
    if(contador < texto.length){
        setTimeout(()=>{
            project.textContent += texto.charAt(contador);
            contador++;
            digitar(texto, contador);
        }, 90)
    }
}
digitar("Bruno Henrique", 0);



