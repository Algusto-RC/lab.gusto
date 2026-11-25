const comparison = document.querySelector('#comparison');
const showcase = document.querySelector('#showcase');

comparison.addEventListener('input', () => {
  showcase.style.setProperty('--split', `${comparison.value}%`);
});
