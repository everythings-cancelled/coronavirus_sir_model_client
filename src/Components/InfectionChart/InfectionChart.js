import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as util from './AreaChartUtil.js';
import './InfectionChart.scss';

const InfectionChart = ({dataPoints, hospitalCapacity, country}) => {
  var infectedData = dataPoints.map(item => ({x: item.eon, y: item.infected}));
  var infectedNeedBedData = infectedData.map(item => ({x: item.x, y: item.y*.2}));
  console.log(country, dataPoints);
  console.log(country, hospitalCapacity);
  const svgRef = useRef(null);
  const canvasHeight = 400;
  const canvasWidth = 600;
  const margin = { top: 20, right: 20, bottom: 30, left: 30 }

  useEffect(() => {
    drawChart(infectedData);
  }, [infectedData]);

  const drawChart = data => {
    const svg = d3.select(svgRef.current);
    // maximum y-axis data will be either the max value from infected points
    // or hospital capacity, whichever is larger
    const maxYData = Math.max(Math.max(...infectedData.map(item => item.y)), hospitalCapacity);

    const scale = {
      x: util.getXScale(infectedData.length - 1),
      y: util.getYScale(maxYData)
    }

    util.drawXAxis(svg, scale.x);
    util.drawYAxis(svg, scale.y);

    util.plotArea(svg, scale, infectedData, 'steelblue'); // all infected
    util.plotArea(svg, scale, infectedNeedBedData, 'green'); // need hospitalization

    util.drawHorizontalLine(svg, scale.y, hospitalCapacity); // hospital bed capacity
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
