const cards = document.querySelector(".cards");

document.querySelector(".direita").onclick = () => {

    cards.scrollBy({

        left:350,
        behavior:"smooth"

    });

}

document.querySelector(".esquerda").onclick = () => {

    cards.scrollBy({

        left:-350,
        behavior:"smooth"

    });

}