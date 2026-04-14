async function loadJson(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (e) {
    console.warn('Failed to load', path, e);
    return null;
  }
}

function prevNext(chapters, currentId) {
  const idx = chapters.findIndex(c => c.id === currentId);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  return `
    <nav class="prev-next" aria-label="Previous and next chapter">
      ${prev ? `<a href="${prev.id}.html">&larr; ${prev.title}</a>` : `<a href="../index.html">&larr; Overview</a>`}
      ${next ? `<a href="${next.id}.html">${next.title} &rarr;</a>` : `<a href="../index.html">Return home &rarr;</a>`}
    </nav>
  `;
}

(async function initSite() {
  const root = document.body.dataset.root || '';
  const [siteMeta, chapters] = await Promise.all([
    loadJson(root + 'data/siteMeta.json'),
    loadJson(root + 'data/chapters.json')
  ]);

  if (!siteMeta || !chapters) return;

  // Inject site metadata
  document.querySelectorAll('[data-site-title]').forEach(el => el.textContent = siteMeta.siteTitle);
  document.querySelectorAll('[data-site-subtitle]').forEach(el => el.textContent = siteMeta.subtitle);
  document.querySelectorAll('[data-site-tagline]').forEach(el => el.textContent = siteMeta.tagline);

  // Home page: chapter cards
  if (document.body.dataset.page === 'home') {
    const host = document.getElementById('chapter-cards');
    if (host) {
      host.innerHTML = chapters.map(ch => `
        <article class="chapter-card">
          <h3><a href="chapters/${ch.id}.html">${ch.title}</a></h3>
          <p>${ch.thesis}</p>
        </article>
      `).join('');
    }
  }

  // Chapter page: inject title, thesis, caution note
  const chapterId = document.body.dataset.chapter;
  if (chapterId) {
    const current = chapters.find(c => c.id === chapterId);
    if (!current) return;

    const titleEl = document.getElementById('chapter-title');
    if (titleEl) titleEl.textContent = current.title;

    const thesisEl = document.getElementById('chapter-thesis');
    if (thesisEl) thesisEl.textContent = current.thesis;

    const cautionEl = document.getElementById('chapter-caution');
    if (cautionEl && current.cautionNote) {
      cautionEl.textContent = current.cautionNote;
    } else if (cautionEl) {
      cautionEl.style.display = 'none';
    }

    const nav = document.getElementById('prev-next-nav');
    if (nav) nav.innerHTML = prevNext(chapters, chapterId);
  }
})();
