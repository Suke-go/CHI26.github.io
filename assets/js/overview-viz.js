(async function renderOverviewViz() {
  const svg = d3.select('#overview-viz');
  if (svg.empty()) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cfg = await fetch('data/animationConfig.json').then(r => r.json()).catch(() => ({ overviewLoopDurationMs: 5200 }));
  const loopDuration = cfg.overviewLoopDurationMs || 5200;

  const width = 360;
  const height = 220;
  svg.attr('viewBox', `0 0 ${width} ${height}`);

  svg.append('text').attr('x', 14).attr('y', 20).attr('font-size', 10).attr('fill', '#334155').text('Conventional clustering');
  svg.append('text').attr('x', 198).attr('y', 20).attr('font-size', 10).attr('fill', '#334155').text('Boundary loop emergence');

  const left = svg.append('g');
  const right = svg.append('g');

  const lNodes = [{x:45,y:75},{x:70,y:90},{x:55,y:115},{x:115,y:130},{x:140,y:148},{x:125,y:105}];
  left.selectAll('circle').data(lNodes).enter().append('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',4).attr('fill','#93c5fd');
  left.selectAll('line').data([[0,1],[1,2],[3,4],[4,5],[3,5]]).enter().append('line')
    .attr('x1',d=>lNodes[d[0]].x).attr('y1',d=>lNodes[d[0]].y).attr('x2',d=>lNodes[d[1]].x).attr('y2',d=>lNodes[d[1]].y)
    .attr('stroke','#7dd3fc').attr('stroke-width',1.7);

  const nodes = [{x:218,y:76},{x:246,y:108},{x:282,y:112},{x:306,y:84},{x:270,y:60}];
  const nodeSel = right.selectAll('circle').data(nodes).enter().append('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',4.3).attr('fill','#0284c7').attr('opacity',0.2);
  const mk = (edges, color, w) => right.append('g').selectAll('line').data(edges).enter().append('line')
    .attr('x1',d=>nodes[d[0]].x).attr('y1',d=>nodes[d[0]].y).attr('x2',d=>nodes[d[1]].x).attr('y2',d=>nodes[d[1]].y)
    .attr('stroke',color).attr('stroke-width',w).attr('opacity',0);

  const local = mk([[0,1],[2,3]], '#7dd3fc', 1.7);
  const loop = mk([[1,2],[3,4],[4,0]], '#0ea5e9', 2.1);
  const fill = mk([[1,4],[0,2]], '#f97316', 2.2);
  const glow = right.append('path').attr('d', d3.line().x(i=>nodes[i].x).y(i=>nodes[i].y)([0,1,2,3,4,0]))
    .attr('fill','none').attr('stroke','#0ea5e9').attr('stroke-width',5).attr('opacity',0);

  function reset() { nodeSel.attr('opacity',0.2); local.attr('opacity',0); loop.attr('opacity',0); fill.attr('opacity',0); glow.attr('opacity',0); }
  function run() {
    reset();
    if (reduceMotion) {
      nodeSel.attr('opacity',0.95); local.attr('opacity',1); loop.attr('opacity',1); fill.attr('opacity',0.8); glow.attr('opacity',0.15);
      return;
    }
    nodeSel.transition().duration(500).attr('opacity',0.95);
    local.transition().delay(800).duration(700).attr('opacity',1);
    loop.transition().delay(1850).duration(800).attr('opacity',1);
    glow.transition().delay(1850).duration(700).attr('opacity',0.2).transition().duration(600).attr('opacity',0);
    fill.transition().delay(3300).duration(750).attr('opacity',0.95).transition().duration(550).attr('opacity',0.25);
  }

  run();
  if (!reduceMotion) setInterval(run, loopDuration);
})();
