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
  var mockData2 = mockData.map(item => ({x: item.x, y: item.y*.2}));

  const svgRef = useRef(null);
  const canvasHeight = 400;
  const canvasWidth = 600;
  const margin = { top: 20, right: 20, bottom: 30, left: 30 }

  useEffect(() => {
    drawChart(mockData);
  }, []);

  const drawChart = data => {
    const svg = d3.select(svgRef.current);

    // Draw x-axis
    const xScale = d3.scaleLinear()
      .domain([0, mockData.length-1])
      .range([margin.left, canvasWidth - margin.right]);
    const xAxis = d3.axisBottom(xScale);
    svg.select('.x-axis')
      .style('transform',` translateY(${canvasHeight - margin.bottom}px)` )
      .call(xAxis);

    // Draw y-axis
    const yScale = d3.scaleLinear()
      .domain([0, Math.max(...mockData.map(item => item.y))])
      .range([canvasHeight - margin.bottom, margin.top]);
    const yAxis = d3.axisLeft(yScale);
    svg.select('.y-axis')
      .style('transform',` translateX(${margin.left}px)` )
      .call(yAxis);

    // line for hospital bed
    svg.append('line')
      .attr('x1', margin.left)
      .attr('x2', canvasWidth)
      .attr('y1', yScale(16))
      .attr('y2', yScale(16))
      // .attr('stroke-dasharray', '5')
      .style('stroke', 'grey');

    // Draw graph all infected area
    const allInfectedArea = d3.area()
      .x(d => xScale(d.x))
      .y0(canvasHeight - margin.bottom)
      .y1(d => yScale(d.y))
      .curve(d3.curveCardinal);

    svg.append('path')
      .datum(mockData)
      .attr('class', 'all-infected')
      .attr('fill', 'steelblue')
      .attr('fill-opacity', '.5')
      .attr('d', allInfectedArea);

    // Draw graph need hospitalization infected area
    const hospitalizedInfectedArea = d3.area()
      .x(d => xScale(d.x))
      .y0(canvasHeight - margin.bottom)
      .y1(d => yScale(d.y))
      .curve(d3.curveCardinal);

    svg.append('path')
      .datum(mockData2)
      .attr('class', 'hospitalized-infected')
      .attr('fill', 'green')
      .attr('fill-opacity', '.5')
      .attr('d', allInfectedArea);
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
