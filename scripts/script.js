const titulo = document.querySelector("h1");

window.addEventListener("load",()=>{

    titulo.style.opacity="0";
    titulo.style.transform="translateY(40px)";

    setTimeout(()=>{

        titulo.style.transition="1s";

        titulo.style.opacity="1";
        titulo.style.transform="translateY(0)";

    },300);

});