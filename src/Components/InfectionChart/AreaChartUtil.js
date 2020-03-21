import * as d3 from 'd3';

const margin = { top: 20, right: 20, bottom: 30, left: 50 };

export const SVG_HEIGHT = 400;
export const SVG_WIDTH = 600;
export const X_AXIS = 'x-axis';
export const Y_AXIS = 'y-axis';
export const ALL_INFECTED = 'all-infected';
export const HELP_NEEDED = 'help-needed-infected';
export const HOSPITAL_CAPACITY = 'hospital-capacity';

// dataLength is the data length for X axis, in this case the eons
export const getXScale = dataLength => {
  return d3.scaleLinear()
    .domain([0, dataLength])
    .range([margin.left, SVG_WIDTH - margin.right]);
}

// maxData is the max data to plot on Y Axis
export const getYScale = maxData => {
  return d3.scaleLinear()
    .domain([0, maxData])
    .range([SVG_HEIGHT - margin.bottom, margin.top]);
}

export const drawXAxis = (svg, xScale) => {
  const xAxis = d3.axisBottom(xScale);

  svg.select(`#${X_AXIS}`)
    .style('transform',` translateY(${SVG_HEIGHT - margin.bottom}px)` )
    .call(xAxis);
}

export const drawYAxis = (svg, yScale) => {
  const yAxis = d3.axisLeft(yScale);

  svg.select(`#${Y_AXIS}`)
    .style('transform',` translateX(${margin.left}px)` )
    .call(yAxis);
}

export const plotArea = (svg, scaleObj, chartData, selectorId, color) => {
  const { x: xScale, y: yScale } = scaleObj;

  const area = d3.area()
    .x(d => xScale(d.x))
    .y0(SVG_HEIGHT - margin.bottom)
    .y1(d => yScale(d.y))
    .curve(d3.curveCardinal);

  d3.select(`#${selectorId}`)
    .datum(chartData)
    .attr('fill', color)
    .attr('fill-opacity', '.5')
    .attr('d', area);
}

export const drawHorizontalLine = (svg, yScale, yValue, selectorId) => {
  svg.select(`#${selectorId}`)
    .attr('x1', margin.left)
    .attr('x2', SVG_WIDTH)
    .attr('y1', yScale(yValue))
    .attr('y2', yScale(yValue))
    // .attr('stroke-dasharray', '5')
    .style('stroke', 'grey');
}
