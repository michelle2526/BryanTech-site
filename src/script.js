// Animação ao aparecer na tela (UX Scroll)

const elementos = document.querySelectorAll(".fade-up");

const observar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});


elementos.forEach((elemento) => {
    observar.observe(elemento);
});



// Efeito no menu ao rolar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("header-scroll");
    }else{
        header.classList.remove("header-scroll");
    }

});



// Botão com efeito de clique

const botoes = document.querySelectorAll("button, .btn");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        botao.style.transform = "scale(0.95)";

        setTimeout(()=>{
            botao.style.transform = "";
        },150);

    });

});