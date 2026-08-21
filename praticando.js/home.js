const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener( 'click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btnTroca.addEventListener( ' mouseenter ', () => {
    nomeSaida.style.color = "#5c1b1b";
});

btnTroca.addEventListener( ' mouseout', () => {
    nomeSaida.style.color = " #780303"

})

//trocando a cor da caixa 

const btnVermelho = document.getElementById("btn-vermelho");
const btnPreto = document.getElementById("btn-preto");
const btnBranco = document.getElementById("btn-branco");
const caixa = document.getElementById("caixa");

btnVermelho.addEventListener('click', function(){
    caixa.style.backgroundColor


})
