import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as util from './AreaChartUtil.js';
import './InfectionChart.scss';

const InfectionChart = ({dataPoints, hospitalCapacity, country}) => {
  // normalize the data into x and y coordinate
  const infectedData = dataPoints.map(item => ({x: item.eon, y: item.infected}));
  // almost the same as `infectedData` above, but the y value is at 20%
  const infectedNeedBedData = infectedData.map(item => ({x: item.x, y: item.y*.2}));
  const svgRef = useRef(null);

  console.log(country, dataPoints);
  console.log(country, hospitalCapacity);

  useEffect(() => {
    // === Draw chart ===
    const svg = d3.select(svgRef.current);
    // maximum y-axis data will be either the max value from infected points
    // or hospital capacity, whichever is larger
    const maxYData = Math.max(Math.max(...infectedData.map(item => item.y)), hospitalCapacity);

    const scale = {
      x: util.getXScale(infectedData.length - 1),
      y: util.getYScale(maxYData)
    }

    util.drawXAxis(svg, scale.x, util.X_AXIS);
    util.drawYAxis(svg, scale.y, util.Y_AXIS);

    util.plotArea(svg, scale, infectedData, util.ALL_INFECTED, 'steelblue'); // all infected
    util.plotArea(svg, scale, infectedNeedBedData, util.HELP_NEEDED, 'green'); // need hospitalization

    util.drawHorizontalLine(svg, scale.y, hospitalCapacity, util.HOSPITAL_CAPACITY); // hospital bed capacity
  })

  return (
    <div className="InfectionChart">
      <svg width={util.SVG_WIDTH} height={util.SVG_HEIGHT} ref={svgRef}>
        <path id={util.ALL_INFECTED} />
        <path id={util.HELP_NEEDED} />
        <line id={util.HOSPITAL_CAPACITY} />
        <g id={util.X_AXIS} />
        <g id={util.Y_AXIS} />
      </svg>
    </div>
  )
}

export default InfectionChart;
