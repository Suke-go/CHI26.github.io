"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { YearlyMetric } from "@/lib/types";

interface Props {
  data: YearlyMetric[];
}

export function YearlyMetricsChart({ data }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = 340;
    const height = 220;
    const margin = { top: 24, right: 14, bottom: 30, left: 42 };

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year) as [number, number])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear().domain([0, 3.5]).range([height - margin.bottom, margin.top]);

    const line = d3
      .line<YearlyMetric>()
      .x((d) => x(d.year))
      .y((d) => y(d.totalH1Persistence))
      .curve(d3.curveMonotoneX);

    const barY = d3
      .scaleLinear()
      .domain([0, 0.6])
      .range([height - margin.bottom, margin.top + 24]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((d) => d.toString()));

    svg.append("g").attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(5));

    const bars = svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.year) - 12)
      .attr("width", 24)
      .attr("y", height - margin.bottom)
      .attr("height", 0)
      .attr("fill", "#bae6fd");

    bars
      .transition()
      .duration(700)
      .delay((_, i) => i * 80)
      .attr("y", (d) => barY(d.triadicClosure))
      .attr("height", (d) => height - margin.bottom - barY(d.triadicClosure));

    const path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#0369a1")
      .attr("stroke-width", 3)
      .attr("d", line);

    const totalLength = path.node()?.getTotalLength() ?? 0;
    path
      .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);

    svg
      .append("text")
      .attr("x", margin.left)
      .attr("y", 14)
      .attr("font-size", 11)
      .attr("fill", "#334155")
      .text("Line: Total H1 persistence · Bars: Triadic closure");
  }, [data]);

  return <svg ref={ref} role="img" aria-label="Yearly topology metrics chart" className="w-full" />;
}
