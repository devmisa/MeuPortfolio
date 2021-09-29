const overlay = document.querySelector(".overlay");

window.addEventListener("load", function(){
        overlay.style.display = "none";
})

function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
                setTimeout(function(){
                   elemento.innerHTML += letra;
                }, 75 * i)  
        });
}           

const titulo = document.querySelector('h1');
typeWriter(titulo);