const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btnTroca = document.getElementById("btn-troca");

btnTroca.addEventListener('click', () => {
    nomeSaida.textContent = nomeEntrada.value;
});

btnTroca.addEventListener(' mouseenter ', () => {
    nomeSaida.style.color = "#5c1b1b";
});

btnTroca.addEventListener(' mouseout', () => {
    nomeSaida.style.color = " #780303"

})

//trocando a cor da caixa 

const btnVermelho = document.getElementById("btn_vermelho");
const btnPreto = document.getElementById("btn_preto");
const btnBranco = document.getElementById("btn_branco");
const caixa = document.getElementById("caixa");

btnVermelho.addEventListener('click', () => {
    caixa.style.backgroundColor = "red";
});

btnPreto.addEventListener('click', () => {
    caixa.style.backgroundColor = "black";
});

btnBranco.addEventListener('click', () => {
    caixa.style.backgroundColor = "white";
});

//simulando add e sub de valor 
const valorReal = document.getElementById("valor_real");
let contador = 0;

document.getElementById("btn_menos").addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorReal.textContent = contador;
    }
});

document.getElementById("btn_mais").addEventListener('click', () => {
    contador++;
    valorReal.textContent = contador;
});

//add livros

const nomelivro = document.getElementById("nome_livro");
const listaLivros = document.getElementById("lista_livros")
 
document.getElementById("adiciona_livro").addEventListener('click', () => {
 
const novolivro = document. createElement("li");
novolivro.textContent = nomelivro. value;
    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "Apagar";
 
    botaoApagar.addEventListener("click", () => {
        novolivro.remove();
    });
 
    novolivro.appendChild(botaoApagar);
    listaLivros.appendChild(novolivro);
 
    nomelivro.value = "";
});
    

