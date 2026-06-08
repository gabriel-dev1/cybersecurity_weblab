const nav = document.getElementById("state");

const state = `<header><nav class="flex" id="fragment_nav2">
    <div>
      <a href="./index.html">Início</a>
      <a href="./curriculum.html">Currículo</a>
      <a href="./receitas.html">Receitas</a>
      <a href="./contact.html">Contato</a>
      <a href="./about.html">Sobre</a>
    </div>
    <div class="controles-acessibilidade">
      <button id="btn-diminuir" aria-label="Diminuir tamanho da fonte">A-</button>
      <button id="btn-normal" aria-label="Tamanho de fonte normal">A</button>
      <button id="btn-aumentar" aria-label="Aumentar tamanho da fonte">A+</button>
    </div>
    <div>
      <button class="buttons" id="btn-tema" aria-label="Alternar para modo noturno">
        Modo Diurno
      </button>
    </div>
</nav></header>`;

nav.innerHTML = state;

const htmlElement = document.documentElement;

let tamanhoAtual = 100;
const passo = 10; 
const tamanhoMinimo = 80;
const tamanhoMaximo = 150;

document.getElementById('btn-aumentar').addEventListener('click', () => {
  if (tamanhoAtual < tamanhoMaximo) {
    tamanhoAtual += passo;
    htmlElement.style.fontSize = `${tamanhoAtual}%`;
  }
});

document.getElementById('btn-diminuir').addEventListener('click', () => {
  if (tamanhoAtual > tamanhoMinimo) {
    tamanhoAtual -= passo;
    htmlElement.style.fontSize = `${tamanhoAtual}%`;
  }
});

document.getElementById('btn-normal').addEventListener('click', () => {
  tamanhoAtual = 100;
  htmlElement.style.fontSize = `${tamanhoAtual}%`;
});