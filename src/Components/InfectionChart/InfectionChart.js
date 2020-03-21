import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './InfectionChart.scss';

const InfectionChart = () => {
  var mockData = [
    { x: 0, y: 10, },
    { x: 1, y: 15, },
    { x: 2, y: 35, },
    { x: 3, y: 20, },
    { x: 4, y: 10, },
    { x: 5, y: 15, },
    { x: 6, y: 35, },
    { x: 7, y: 20, },
    { x: 8, y: 35, },
    { x: 9, y: 20, }
  ];
  // const chartRef = useRef(null);
  const svgRef = useRef(null);
  const canvasHeight = 400
  const canvasWidth = 600

  useEffect(() => {
    drawChart(mockData);
  }, []);

  const drawChart = data => {
    const svg = d3.select(svgRef.current);
    const scale = 20;

    // Draw x-axis
    const xScale = d3.scaleLinear()
      .domain([0, mockData.length-1])
      .range([30, canvasWidth-20]);
    const xAxis = d3.axisBottom(xScale)
      .ticks(mockData.length)
      .tickFormat(index => index+1);
    svg.select('.x-axis')
      .style('transform',` translateY(${canvasHeight-40}px)` )
      .call(xAxis);

    // Draw y-axis
    const yScale = d3.scaleLinear()
      .domain([0, Math.max(...mockData.map(item => item.y))])
      .range([canvasHeight-40, 30]);
    const yAxis = d3.axisLeft(yScale);
    svg.select('.y-axis')
      .style('transform',` translateX(${30}px)` )
      .call(yAxis);

    // Draw graph area
    const area = d3.area()
      .x(d => xScale(d.x))
      .y0(canvasHeight)
      .y1(d => yScale(d.y))
      .curve(d3.curveCardinal);

    // svg.append('path')
    //   .datum(mockData)
    //   .attr('fill', 'steelblue')
    //   .attr('class', 'area')
    //   .attr('d', area);
  }

  return (
    <div className="InfectionChart">
      <svg width={canvasWidth} height={canvasHeight} ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  )
}

export default InfectionChart;
