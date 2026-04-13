"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
  integrating: boolean;
}

export function CycleDiagram({ integrating }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    const width = 250;
    const height = 160;
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const color = integrating ? "#0284c7" : "#94a3b8";
    const dash = integrating ? "0" : "6,5";

    svg
      .append("circle")
      .attr("cx", 125)
      .attr("cy", 80)
      .attr("r", 48)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 3)
      .attr("stroke-dasharray", dash)
      .attr("opacity", 0)
      .transition()
      .duration(700)
      .attr("opacity", 1);

    const labels = integrating ? ["VR", "Therapy", "Embodiment"] : ["Speculation", "Ritual", "Institution"];

    [[125, 26], [56, 112], [186, 112]].forEach(([x, y], i) => {
      svg
        .append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("text-anchor", "middle")
        .attr("font-size", 11)
        .attr("fill", "#0f172a")
        .attr("opacity", 0)
        .text(labels[i])
        .transition()
        .delay(180 + i * 120)
        .duration(250)
        .attr("opacity", 1);
    });
  }, [integrating]);

  return <svg ref={ref} role="img" aria-label="Representative topology cycle diagram" className="w-full max-w-[250px]" />;
}
