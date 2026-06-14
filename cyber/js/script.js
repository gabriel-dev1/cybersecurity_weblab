const nav = document.getElementById("state");

const state = `<header><nav class="flex" id="fragment_nav2">
    <div>
      <a href="./index.html">Início</a>
      <a href="./content.html">Cartilha Redes Sociais</a>
      <a href="./content2.html">Cartilha Códigos Maliciosos</a>
      <a href="./seguranca.html">Gerador de Senhas</a>
      <a href="./about.html">Sobre</a>
      <a href="./contact.html">Contato</a>
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

const form = document.getElementById('formContato');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('message').value.trim();
    const erroTexto = document.getElementById('mensagemErro');
  
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (nome === '' || email === '' || mensagem === '') {
      erroTexto.textContent = 'Por favor, preencha todos os campos.';
      erroTexto.style.display = 'block';
      return;
    }
  
    if (!regexEmail.test(email)) {
      erroTexto.textContent = 'Por favor, digite um e-mail válido.';
      erroTexto.style.display = 'block';
      return;
    }
  
    erroTexto.style.display = 'none';
    alert('Página em construção');
  });
}

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

const botaoTema = document.getElementById('btn-tema');

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo) {
  htmlElement.setAttribute('data-theme', temaSalvo);
  atualizarBotao(temaSalvo);
}

botaoTema.addEventListener('click', () => {
  const temaAtual = htmlElement.getAttribute('data-theme');
  const novoTema = temaAtual === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', novoTema);
  
  localStorage.setItem('tema', novoTema);
  
  atualizarBotao(novoTema);
});

function atualizarBotao(tema) {
  if (tema === 'light') {
    botaoTema.innerHTML = 'Modo Diurno';
    botaoTema.setAttribute('aria-label', 'Alternar para modo claro');
  } else {
    botaoTema.innerHTML = 'Modo Noturno';
    botaoTema.setAttribute('aria-label', 'Alternar para modo noturno');
  }
}