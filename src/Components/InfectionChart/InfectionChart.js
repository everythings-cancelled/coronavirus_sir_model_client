import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as util from './AreaChartUtil.js';
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
    const scale = {
      x: util.getXScale(mockData.length - 1),
      y: util.getYScale(Math.max(...mockData.map(item => item.y)))
    }

    util.drawXAxis(svg, scale.x);
    util.drawYAxis(svg, scale.y);

    util.plotArea(svg, scale, mockData, 'steelblue'); // all infected
    util.plotArea(svg, scale, mockData2, 'green'); // need hospitalization

    util.drawHorizontalLine(svg, scale.y, 16); // hospital bed capacity
  }

  return (
    <div className="InfectionChart">
      <svg width={canvasWidth} height={canvasHeight} ref={svgRef}>
        <g className={util.X_AXIS} />
        <g className={util.Y_AXIS} />
      </svg>
    </div>
  )
}

export default InfectionChart;
