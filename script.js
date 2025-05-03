const alphabetContainer = document.getElementById('alphabetFilter');
const artistCards = document.querySelectorAll('.artist-card');
const searchInput = document.getElementById('searchInput');

// Generate A-Z filter buttons
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const span = document.createElement('span');
  span.className = 'alphabet-letter';
  span.dataset.letter = letter;
  span.textContent = letter;

  span.addEventListener('click', () => {
    // Remove active class from all letters
    document.querySelectorAll('.alphabet-letter').forEach(el => el.classList.remove('active'));
    span.classList.add('active');

    // Clear search input
    searchInput.value = '';

    // Filter artist cards
    artistCards.forEach(card => {
      const name = card.dataset.name.toUpperCase();
      if (name.startsWith(letter)) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  });

  alphabetContainer.appendChild(span);
});

// Search input filtering
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toUpperCase();

  // Clear active alphabet filter
  document.querySelectorAll('.alphabet-letter').forEach(el => el.classList.remove('active'));

  artistCards.forEach(card => {
    const name = card.dataset.name.toUpperCase();
    if (name.includes(query)) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
});
