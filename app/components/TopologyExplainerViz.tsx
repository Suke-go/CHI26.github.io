"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export function TopologyExplainerViz() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    const width = 320;
    const height = 180;
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const points = [
      [60, 90],
      [120, 45],
      [195, 55],
      [255, 95],
      [210, 140],
      [120, 130]
    ] as const;

    svg
      .append("polygon")
      .attr("points", points.map((p) => p.join(",")).join(" "))
      .attr("fill", "#e0f2fe")
      .attr("stroke", "#0284c7")
      .attr("stroke-width", 2)
      .attr("opacity", 0)
      .transition()
      .duration(700)
      .attr("opacity", 1);

    svg
      .append("path")
      .attr("d", "M 70 95 Q 160 15 245 95")
      .attr("fill", "none")
      .attr("stroke", "#0f172a")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "5,4")
      .attr("opacity", 0)
      .transition()
      .delay(400)
      .duration(600)
      .attr("opacity", 1);

    svg
      .append("text")
      .attr("x", 18)
      .attr("y", 24)
      .attr("font-size", 11)
      .attr("fill", "#334155")
      .text("Persistent loop = recurring concept bridge");
  }, []);

  return <svg ref={ref} role="img" aria-label="Topology explainer illustration" className="w-full" />;
}
