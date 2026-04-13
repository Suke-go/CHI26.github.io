async function loadJson(path) {
  const res = await fetch(path);
  return res.json();
}

function figureLabel(kind) {
  return `<span class="figure-label">${kind}</span>`;
}

function prevNext(chapters, currentId) {
  const idx = chapters.findIndex(c => c.id === currentId);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
  return `
    <nav class="prev-next" aria-label="Previous and next chapter">
      ${prev ? `<a href="${idx-1===-1?'../index.html':`${prev.id}.html`}">← ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a href="${next.id}.html">${next.title} →</a>` : '<a href="../index.html">Return home →</a>'}
    </nav>
  `;
}

(async function initSite() {
  const [siteMeta, chapters] = await Promise.all([
    loadJson(document.body.dataset.root + 'data/siteMeta.json'),
    loadJson(document.body.dataset.root + 'data/chapters.json')
  ]);

  document.querySelectorAll('[data-site-title]').forEach(el => el.textContent = siteMeta.siteTitle);
  document.querySelectorAll('[data-site-subtitle]').forEach(el => el.textContent = siteMeta.subtitle);
  document.querySelectorAll('[data-site-tagline]').forEach(el => el.textContent = siteMeta.tagline);

  if (document.body.dataset.page === 'home') {
    const host = document.getElementById('chapter-cards');
    host.innerHTML = chapters.map(ch => `
      <article class="chapter-card">
        <h3><a href="chapters/${ch.id}.html">${ch.title}</a></h3>
        <p>${ch.thesis}</p>
      </article>
    `).join('');
  }

  const chapterId = document.body.dataset.chapter;
  if (chapterId) {
    const current = chapters.find(c => c.id === chapterId);
    const titleEl = document.getElementById('chapter-title');
    const thesisEl = document.getElementById('chapter-thesis');
    if (titleEl && current) titleEl.textContent = current.title;
    if (thesisEl && current) thesisEl.textContent = current.thesis;

    const cap = document.getElementById('figure-caption');
    if (cap && current) cap.textContent = current.figureCaption;

    const caution = document.getElementById('chapter-caution');
    if (caution && current) caution.textContent = current.cautionNote;

    const nav = document.getElementById('prev-next-nav');
    if (nav) nav.innerHTML = prevNext(chapters, chapterId);
  }

  document.querySelectorAll('[data-figure-label]').forEach(el => {
    el.innerHTML = figureLabel(el.dataset.figureLabel);
  });
})();
