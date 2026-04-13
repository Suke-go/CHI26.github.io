(async function initChapters() {
  const chapter = document.body.dataset.chapter;
  if (!chapter) return;
  const root = document.body.dataset.root;


  if (chapter === '02-topology') {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const edges = Array.from(document.querySelectorAll('#loop-mini .e'));
    const tri = document.getElementById('fill-tri');
    edges.forEach((e,i)=> {
      e.style.opacity = reduceMotion ? 1 : 0;
      e.style.transition = 'opacity 320ms ease';
      if (!reduceMotion) setTimeout(() => { e.style.opacity = 1; }, 180 * i);
    });
    if (tri) {
      tri.style.opacity = reduceMotion ? 0.35 : 0.08;
      if (!reduceMotion) setTimeout(() => { tri.style.transition = 'opacity 420ms ease'; tri.style.opacity = 0.45; }, 980);
    }
  }

  if (chapter === '05-detection') {
    const steps = await fetch(root + 'data/methodSteps.json').then(r => r.json());
    const host = document.getElementById('method-steps');
    if (host) {
      host.innerHTML = steps.map((s, i) => `<article class="pipeline-step" style="animation-delay:${i*120}ms"><h3>${s.label}</h3><p>${s.explanation}</p><p class="note"><strong>Consumes:</strong> ${s.consumes}<br><strong>Outputs:</strong> ${s.outputs}</p></article>`).join('');
    }
  }

  if (chapter === '06-evidence') {
    const facts = await fetch(root + 'data/researchFacts.json').then(r => r.json());
    const caseSeq = document.getElementById('case-seq');
    caseSeq.textContent = facts.caseExample.cycle.join(' → ');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { caseSeq.style.opacity = 0; caseSeq.style.transition = 'opacity 520ms ease'; setTimeout(() => { caseSeq.style.opacity = 1; }, 180); }
    document.getElementById('metric-cards').innerHTML = `
      <article class="metric-card"><span>NDCG@50</span><strong>${facts.ranking.metric}</strong><p>Ranking target metric.</p></article>
      <article class="metric-card"><span>vs AA+RA</span><strong>+${facts.ranking.deltaVsAARA}</strong><p>Graph-based comparison improvement.</p></article>
      <article class="metric-card"><span>Significance</span><strong>p = ${facts.ranking.pValue}</strong><p>Reported significance.</p></article>
      <article class="metric-card"><span>Lead time</span><strong>~${facts.ranking.medianLeadYearsApprox} years</strong><p>Median early signal lead time.</p></article>
      <article class="metric-card"><span>SciBERT overlap</span><strong>${facts.ranking.scibertOverlapTop50}</strong><p>Top-50 overlap range.</p></article>
    `;
  }

  if (chapter === '08-scope') {
    const scope = await fetch(root + 'data/scope.json').then(r => r.json());
    document.getElementById('captures-list').innerHTML = scope.captures.map(item => `<article class="scope-item"><h3>${item.label}</h3><p>${item.explanation}</p><p class="note"><strong>Example:</strong> ${item.example}</p></article>`).join('');
    document.getElementById('nonclaims-list').innerHTML = scope.doesNotEstablish.map(item => `<article class="scope-item"><h3>${item.label}</h3><p>${item.explanation}</p><p class="note"><strong>Example:</strong> ${item.example}</p></article>`).join('');
  }

  if (chapter === '09-implications') {
    const data = await fetch(root + 'data/implications.json').then(r => r.json());
    document.getElementById('implications-list').innerHTML = data.map(i => `<article class="scope-item"><h3>${i.group}</h3><p><strong>${i.headline}</strong></p><p>${i.shortExplanation}</p><p class="note">${i.takeaway}</p></article>`).join('');
  }
})();
