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
