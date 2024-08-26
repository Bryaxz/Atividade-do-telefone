document.addEventListener('DOMContentLoaded', function() {
    
    const inputTelefone = document.getElementById('telefone');
    const botoesNumeros = document.querySelectorAll('.teclado input[type="button"]');

    botoesNumeros.forEach(botao => {
        botao.addEventListener('click', function() {
            inputTelefone.value += this.value;
        });
    });
});
