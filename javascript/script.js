function insert(num)

{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()

{
    document.getElementById('resultado').innerHTML = "";
}

function back()

{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()

{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

const menuToggle = document.querySelector(".menu-toggle");
        const navbar = document.querySelector(".navbar");

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });




 /* cards pag inicial */
VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector(".card2"), {
    max: 25,
    speed: 400
});


VanillaTilt.init(document.querySelector(".card3"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector(".card4"), {
    max: 25,
    speed: 400
});

document.getElementById("year").textContent = new Date().getFullYear();
