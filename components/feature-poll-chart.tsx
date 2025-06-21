"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';

interface FeaturePollData {
  feature: string;
  votes: number;
}

interface FeaturePollChartProps {
  data: FeaturePollData[];
}

export function FeaturePollChart({ data }: FeaturePollChartProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Sort data by votes in descending order
  const sortedData = [...data].sort((a, b) => b.votes - a.votes);

  // Update dimensions based on container size
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      // Maintain aspect ratio based on width
      const height = Math.min(600, width * 0.6); // Cap height at 600px
      setDimensions({ width, height });
    }
  }, []);

  // Set up resize observer and intersection observer
  useEffect(() => {
    updateDimensions();
    
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

    window.addEventListener('resize', updateDimensions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  // Draw chart
  useEffect(() => {
    if (!isVisible || !svgRef.current || dimensions.width === 0) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up SVG with viewBox for responsive scaling
    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("background", "transparent");

    // Add margins and padding
    const margin = { top: 40, right: 40, bottom: 50, left: 80 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create main group with margins
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleLinear()
      .domain([0, d3.max(sortedData, d => d.votes) || 0])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(sortedData.map(d => d.feature))
      .range([0, height])
      .padding(0.3);

    // Add grid lines
    g.append("g")
      .attr("class", "grid")
    //   .attr("stroke", "rgba(255, 255, 255, 0.1)")
      .attr("stroke", "#244c66")
      .call(d3.axisTop(x).ticks(5).tickSize(-height).tickFormat(() => ""));

    // Add bars with animation
    g.selectAll(".bar")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.feature) || 0)
      .attr("height", y.bandwidth())
      .attr("x", 0)
      .attr("width", 0)
      .attr("fill", "#888")
      .transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr("width", d => x(d.votes));

    // Add value labels
    g.selectAll(".label")
      .data(sortedData)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => x(d.votes) + 5)
      .attr("y", d => (y(d.feature) || 0) + y.bandwidth() / 2 + 5)
      .attr("fill", "#fff")
      .style("font-size", "12px")
      .style("opacity", 0)
      .text(d => d.votes)
      .transition()
      .delay((d, i) => i * 100 + 400)
      .style("opacity", 1);

    // Add y-axis with feature names
    g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y))
      .selectAll(".tick text")
      .style("fill", "#888")
      .style("font-size", "14px");

    // Add x-axis
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5))
      .selectAll(".tick text")
      .style("fill", "#888");

    // Add chart title
    svg.append("text")
      .attr("x", dimensions.width / 2)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("fill", "#fff")
      .text("Requested Features");

  }, [isVisible, dimensions, sortedData]);

  return (
    <div ref={containerRef} className="w-full my-8">
      <svg 
        ref={svgRef}
        className="w-full h-auto min-h-[400px]"
      />
      <p className="text-center text-muted-foreground mt-[-3rem] text-sm">
        Vote for your favorite features in our email newsletter
      </p>
    </div>
  );
}
