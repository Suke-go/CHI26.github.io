(async function renderHero() {
  const svg = d3.select('#hero-viz');
  if (svg.empty()) return;

  const width = 360, height = 220;
  const leftX = 95, rightX = 265, centerY = 110;

  const leftNodes = [
    {x: leftX - 38, y: centerY - 32}, {x: leftX - 18, y: centerY + 24},
    {x: leftX + 8, y: centerY - 12}, {x: leftX + 26, y: centerY + 30},
    {x: leftX + 40, y: centerY - 28}
  ];

  const rightNodes = [
    {x: rightX - 36, y: centerY - 26}, {x: rightX - 14, y: centerY + 30},
    {x: rightX + 16, y: centerY + 27}, {x: rightX + 38, y: centerY - 14},
    {x: rightX + 2, y: centerY - 36}
  ];

  svg.append('text').attr('x', 30).attr('y', 24).attr('font-size', 11).attr('fill', '#334155').text('Established map');
  svg.append('text').attr('x', 208).attr('y', 24).attr('font-size', 11).attr('fill', '#334155').text('Emerging boundary');

  svg.selectAll('.lnode').data(leftNodes).enter().append('circle')
    .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 4).attr('fill', '#0ea5e9');

  const leftEdges = [[0,2],[2,4],[0,1],[1,3],[2,3]];
  svg.selectAll('.ledge').data(leftEdges).enter().append('line')
    .attr('x1', d => leftNodes[d[0]].x).attr('y1', d => leftNodes[d[0]].y)
    .attr('x2', d => leftNodes[d[1]].x).attr('y2', d => leftNodes[d[1]].y)
    .attr('stroke', '#7dd3fc').attr('stroke-width', 1.2);

  const g = svg.append('g');
  g.selectAll('.rnode').data(rightNodes).enter().append('circle')
    .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 4).attr('fill', '#0284c7');

  const loopIdx = [0,1,2,3,4,0];
  const pathData = d3.line().x(i => rightNodes[i].x).y(i => rightNodes[i].y)(loopIdx);
  const loopPath = g.append('path')
    .attr('d', pathData)
    .attr('fill', 'none')
    .attr('stroke', '#0ea5e9')
    .attr('stroke-width', 2)
    .attr('stroke-dasharray', '5 4');

  const bridge = g.append('line')
    .attr('x1', rightNodes[1].x).attr('y1', rightNodes[1].y)
    .attr('x2', rightNodes[4].x).attr('y2', rightNodes[4].y)
    .attr('stroke', '#f97316').attr('stroke-width', 2.5).attr('opacity', 0.2);

  function animate() {
    bridge.transition().duration(1200).attr('opacity', 1)
      .transition().duration(1200).attr('opacity', 0.2)
      .on('end', animate);

    loopPath.transition().duration(1800).attr('stroke-width', 3)
      .transition().duration(1200).attr('stroke-width', 2);
  }
  animate();
})();
