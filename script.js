const startBtn = document.getElementById('startBtn');
const intro = document.querySelector('.intro');
const item = document.querySelector('.item1');
const text = document.querySelector('.background-text');

// Troca de telas ao clicar no botão
startBtn.addEventListener('click', () => {
    window.location.href = 'jogo.html';
});

// Ao clicar na imagem, ela desliza
item.addEventListener('click', () => {
  item.classList.add('active');
});

// Ao clicar no texto, a imagem volta
text.addEventListener('click', () => {
  item.classList.remove('active');
});

