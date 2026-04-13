(async function renderHero() {
  const svg = d3.select('#hero-viz');
  if (svg.empty()) return;

  const width = 360;
  const height = 220;
  svg.attr('viewBox', `0 0 ${width} ${height}`);

  const rightX = 185;
  const centerY = 120;

  const nodes = [
    { x: rightX - 52, y: centerY - 24 },
    { x: rightX - 22, y: centerY + 30 },
    { x: rightX + 18, y: centerY + 28 },
    { x: rightX + 50, y: centerY - 12 },
    { x: rightX + 2, y: centerY - 40 }
  ];

  const localEdges = [[0, 1], [2, 3]];
  const loopEdges = [[1, 2], [3, 4], [4, 0]];
  const fillEdges = [[1, 4], [0, 2]];

  svg.append('text')
    .attr('x', 16)
    .attr('y', 24)
    .attr('font-size', 11)
    .attr('fill', '#334155')
    .text('Schematic sequence: isolated → connected → loop → closure');

  const g = svg.append('g');

  const edgeLayer = g.append('g');
  const loopLayer = g.append('g');
  const fillLayer = g.append('g');

  const nodeSel = g.selectAll('.node')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('class', 'node')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 4.2)
    .attr('fill', '#0284c7')
    .attr('opacity', 0.15);

  function drawEdges(layer, edges, color, width) {
    return layer.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('x1', d => nodes[d[0]].x)
      .attr('y1', d => nodes[d[0]].y)
      .attr('x2', d => nodes[d[1]].x)
      .attr('y2', d => nodes[d[1]].y)
      .attr('stroke', color)
      .attr('stroke-width', width)
      .attr('opacity', 0);
  }

  const localSel = drawEdges(edgeLayer, localEdges, '#7dd3fc', 1.8);
  const loopSel = drawEdges(loopLayer, loopEdges, '#0ea5e9', 2.2);
  const fillSel = drawEdges(fillLayer, fillEdges, '#f97316', 2.2);

  const loopPath = loopLayer.append('path')
    .attr('d', d3.line()
      .x(i => nodes[i].x)
      .y(i => nodes[i].y)([0, 1, 2, 3, 4, 0]))
    .attr('fill', 'none')
    .attr('stroke', '#0ea5e9')
    .attr('stroke-width', 5)
    .attr('opacity', 0);

  function resetState() {
    nodeSel.attr('opacity', 0.15);
    localSel.attr('opacity', 0);
    loopSel.attr('opacity', 0);
    fillSel.attr('opacity', 0);
    loopPath.attr('opacity', 0);
  }

  function runSequence() {
    resetState();

    nodeSel
      .transition().duration(500)
      .attr('opacity', 0.95);

    localSel
      .transition().delay(800).duration(700)
      .attr('opacity', 1);

    loopSel
      .transition().delay(1800).duration(800)
      .attr('opacity', 1);

    loopPath
      .transition().delay(1800).duration(800)
      .attr('opacity', 0.2)
      .transition().delay(300).duration(700)
      .attr('opacity', 0);

    fillSel
      .transition().delay(3200).duration(700)
      .attr('opacity', 0.95)
      .transition().delay(500).duration(700)
      .attr('opacity', 0.2);
  }

  runSequence();
  setInterval(runSequence, 5200);
})();
