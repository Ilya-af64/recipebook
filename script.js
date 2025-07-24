
function filterRecipes(category) {
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'inline-block';
    } else {
      card.style.display = card.classList.contains(category) ? 'inline-block' : 'none';
    }
  });
}
