const tamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");
const campoSenha = document.getElementById("senha");

tamanho.addEventListener("input", () => {
    valorTamanho.textContent = tamanho.value;
});

function gerarSenha() {

    const usarMaiusculas = document.getElementById("maiusculas").checked;
    const usarMinusculas = document.getElementById("minusculas").checked;
    const usarNumeros = document.getElementById("numeros").checked;
    const usarSimbolos = document.getElementById("simbolos").checked;

    let caracteres = "";

    if (usarMaiusculas)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (usarMinusculas)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if (usarNumeros)
        caracteres += "0123456789";

    if (usarSimbolos)
        caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (caracteres.length === 0) {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho.value; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;
}

function copiarSenha() {
    if (campoSenha.value === "") {
        alert("Gere uma senha primeiro.");
        return;
    }

    navigator.clipboard.writeText(campoSenha.value);
    alert("Senha copiada!");
}

gerarSenha();