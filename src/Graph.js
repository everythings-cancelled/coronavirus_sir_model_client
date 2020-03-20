import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        const points = props.points;
        const data = points.map(function(point) {
            return  { x: point.eon, y: point.infected }
        })

        this.data = data;
    

        this.state = { points: props.points }
    }

    render() {
        return(
            <div>
            <XYPlot
                xType="ordinal"
                width={2000}
                height={1000}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="X" />
                <YAxis title="Y" />
                    <LineSeries
                        data={this.data}
                        style={{stroke: 'violet', strokeWidth: 3}}/>
            </XYPlot>
        </div>
        )
    }
}

export default Graph;
