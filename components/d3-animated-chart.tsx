"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';

interface D3AnimatedChartProps {
  data: number[];
  width?: number;
  height?: number;
}

export function D3AnimatedChart({ 
  data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  width = 600,
  height = 300 
}: D3AnimatedChartProps) {

  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Function to update dimensions based on container size
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      // Maintain aspect ratio (16:9) based on width
      const height = (width * 9) / 16;
      setDimensions({ width, height });
    }
  }, []);

  // Set up resize observer and intersection observer
  useEffect(() => {
    updateDimensions();
    
    // Set up resize observer
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Set up intersection observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    // Handle window resize
    window.addEventListener('resize', updateDimensions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  useEffect(() => {
    if (!isVisible || !svgRef.current || dimensions.width === 0) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up SVG with viewBox for responsive scaling
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background", "transparent")
      .style("overflow", "visible");

    // Add some padding for better visualization
    const padding = {
      top: 20,
      right: 30,
      bottom: 40,
      left: 40
    };

    const innerWidth = dimensions.width - padding.left - padding.right;
    const innerHeight = dimensions.height - padding.top - padding.bottom;

    // Set up scales with padding
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data) as number * 1.1]) // Add 10% padding at the top
      .range([innerHeight, 0]);

    // Generate line
    const line = d3.line<number>()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // Create a group for the chart content
    const g = svg.append("g")
      .attr("transform", `translate(${padding.left},${padding.top})`);

    // Add grid lines
    const yAxisGrid = d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat(() => "").ticks(5);
    g.append("g")
      .attr("class", "grid")
      .attr("stroke", "rgba(255, 255, 255, 0.2)")
      .attr("stroke-width", 0.5)
      .call(yAxisGrid);

    // Add x-axis
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${innerHeight})`)
      .attr("stroke", "rgba(255, 255, 255, 0.5)")
      .call(d3.axisBottom(xScale).ticks(Math.min(data.length, 10)));

    // Add y-axis
    g.append("g")
      .attr("class", "y-axis")
      .attr("stroke", "rgba(255, 255, 255, 0.5)")
      .call(d3.axisLeft(yScale).ticks(5));

    // Add the line path
    const path = g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#888")
      .attr("stroke-width", 2.5)
      .attr("stroke-linecap", "round")
      .attr("d", line);

    // Add animation
    const totalLength = path.node()?.getTotalLength() || 0;
    
    path.attr("stroke-dasharray", `${totalLength} ${totalLength}`)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // Add dots at data points
    g.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d, i) => xScale(i))
      .attr("cy", (d) => yScale(d))
      .attr("r", 0)
      .attr("fill", "#FFF")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)
      .transition()
      .delay((d, i) => i * 100)
      .duration(500)
      .attr("r", 4);

  }, [isVisible, data, dimensions]);

  return (
    <div ref={containerRef} className="w-full aspect-video max-w-6xl mx-auto my-12 px-4">
      <svg 
        ref={svgRef} 
        className="w-full h-full"
      />
    </div>
  );
}
