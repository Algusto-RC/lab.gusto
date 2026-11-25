const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.tool-card')];
const search = document.querySelector('#search');
const emptyState = document.querySelector('#empty-state');
let selectedFilter = 'todos';

function updateCards() {
  const term = search.value.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  cards.forEach(card => {
    const matchesFilter = selectedFilter === 'todos' || card.dataset.category === selectedFilter;
    const matchesSearch = !term || `${card.dataset.search} ${card.innerText}`.toLocaleLowerCase('pt-BR').includes(term);
    card.hidden = !(matchesFilter && matchesSearch);
    if (!card.hidden) visible++;
  });
  emptyState.hidden = visible !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter;
  filters.forEach(item => item.classList.toggle('active', item === button));
  updateCards();
}));
search.addEventListener('input', updateCards);

const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.modal-close');
const modalTitle = document.querySelector('#modal-title');
const modalCopy = document.querySelector('#modal-copy');
const modalKicker = document.querySelector('.modal-kicker');
const modalIcon = document.querySelector('.modal-icon');
const modalAction = document.querySelector('#modal-action');
const toolContent = {
  youtube: {
    title: 'YouTube → MP3 / MP4',
    copy: 'Converta vídeos do YouTube em áudio MP3 ou baixe o vídeo em MP4. O conversor atual funciona como aplicativo para Windows.',
    kicker: 'LAB.GUSTO · FERRAMENTA 001', icon: '▶', note: 'A versão hospedada neste site ainda está em planejamento. Esta página apresenta o projeto e seu funcionamento atual.', action: 'Entendi', details: [['FORMATO','MP3 ou MP4'],['PLATAFORMA','Windows'],['STATUS','Disponível']]
  },
  json: {
    title: 'JSON Formatter', copy: 'Uma ferramenta para formatar e validar estruturas JSON direto no navegador. O projeto ainda está na fila de desenvolvimento.',
    kicker: 'LAB.GUSTO · FERRAMENTA 002', icon: '{ }', note: 'Quando estiver pronto, este utilitário poderá ser usado diretamente por aqui.', action: 'Legal, vou aguardar', details: [['FUNÇÃO','Formatar JSON'],['PLATAFORMA','Web'],['STATUS','Em breve']]
  },
  focus: {
    title: 'Timer de foco', copy: 'Um temporizador simples para alternar períodos de foco e pausa. A ideia está em desenvolvimento.',
    kicker: 'LAB.GUSTO · FERRAMENTA 003', icon: '◷', note: 'Quando estiver pronto, este utilitário poderá ser usado diretamente por aqui.', action: 'Legal, vou aguardar', details: [['FUNÇÃO','Foco e pausas'],['PLATAFORMA','Web'],['STATUS','Em breve']]
  }
};
function openModal(tool) {
  const info = toolContent[tool];
  if (!info) return;
  modalTitle.textContent = info.title;
  modalCopy.textContent = info.copy;
  modalKicker.textContent = info.kicker;
  modalIcon.textContent = info.icon;
  modal.querySelector('.modal-note').textContent = info.note;
  modalAction.innerHTML = `${info.action} <span>→</span>`;
  const detailNodes = [...modal.querySelectorAll('.modal-details > div')];
  info.details.forEach(([label,value], index) => {
    detailNodes[index].querySelector('span').textContent = label;
    detailNodes[index].querySelector('b').innerHTML = value === 'Disponível' ? '<i class="status-dot"></i> Disponível' : value;
  });
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  closeButton.focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
document.querySelectorAll('.open-tool').forEach(button => button.addEventListener('click', () => openModal(button.dataset.tool)));
closeButton.addEventListener('click', closeModal);
modalAction.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
