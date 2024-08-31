// script.js

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('nav ul li a');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');

      // Remover a classe ativa de todas as abas
      contents.forEach(content => content.classList.remove('active'));

      // Adicionar a classe ativa apenas à aba clicada
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Ativar a primeira aba por padrão
  if (contents.length > 0) {
    contents[0].classList.add('active');
  }
});
