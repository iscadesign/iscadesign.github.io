// Filtering logic for the Work page
(function () {
  const filterBar = document.getElementById('filterBar');
  const cards = Array.from(document.querySelectorAll('.project-card'));

  function applyFilter(filter) {
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      const isLatest = card.getAttribute('data-latest') === 'true';

      let show = false;
      if (filter === 'all') show = true;
      else if (filter === 'latest') show = isLatest; // mark latest manually via data-latest
      else show = category === filter;

      card.classList.toggle('is-hidden', !show);
    });
  }

  // Click handling + active state
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;

    // Active styles + aria-selected
    filterBar.querySelectorAll('button').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.getAttribute('data-filter');
    applyFilter(filter);
  });

  // Initial filter: latest
  applyFilter('latest');
})();
