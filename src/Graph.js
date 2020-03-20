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
                    width={300}
                    height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={this.data}/>
                </XYPlot>
            </div>
        )
    }
}

export default Graph;
