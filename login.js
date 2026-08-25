const emailSalvo = "vitoria.vih.silvah@gmail.com";
const senhaSalva = "010203";

const emailDigitado = document.getElementById("email");
const senhaDigitada = document.getElementById("senha");
const btnAcessar = document.getElementById("btn-acessar");
const msgLogin = document.getElementById("msg-login");

btnAcessar.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (emailDigitado.value === emailSalvo && senhaDigitada.value == senhaSalva) {
        msgLogin.textContent = "Login efetuado com sucesso!";
        msgLogin.style.color = "green";
        location.href = "index.html";
    } else {
        msgLogin.textContent = "E-mail ou senha incorretos!";
        msgLogin.style.color = "red";
    }
});