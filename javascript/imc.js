const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';

    valor.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden');

    if(imc<18.5){
        descricao = 'Cuidado! Você está abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = 'Você está com o peso ideal!'
        valor.classList.remove('atencao');
        valor.classList.add('normal');
    } else if (imc > 25 && imc <= 30) {
        descricao = 'Cuidado! Você está com sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        descricao = 'Cuidado! Você está com obsidade moderada!'
    } else if (imc > 35 && imc <= 40) {
        descricao = 'Cuidado! Você está com obsidade severa!'
    } else {
        descricao = 'Cuidado! Você está com obsidade mórbida!'
    }

    valor.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao;


});