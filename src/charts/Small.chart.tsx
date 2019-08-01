import React, { Component } from 'react';
import { createChart } from 'lightweight-charts';

// interface ISmallChartProps {
// }

// interface ICoinCardSmallState {
// 	myRef: any;
// }

export class SmallChart extends Component {
	chartId: string;
	// divElement: HTMLDivElement | null;
	divElement: any;
	constructor(props) {
		super(props)
		this.state = {
			dimensions: null,
			height: 0,
			width: 0
		};
		this.chartId = 'chart_' + Math.random().toString(36).substr(2, 9);
		this.divElement = null;
	}
	componentDidMount() {
		const height = this.divElement.clientHeight;
		const width = this.divElement.clientWidth;
		this.setState({ height, width });
		const chart = createChart(this.chartId, { width, height });
		const lineSeries = chart.addLineSeries();
		lineSeries.setData([
				{ time: '2019-04-11', value: 80.01 },
				{ time: '2019-04-12', value: 96.63 },
				{ time: '2019-04-13', value: 76.64 },
				{ time: '2019-04-14', value: 81.89 },
				{ time: '2019-04-15', value: 74.43 },
				{ time: '2019-04-16', value: 80.01 },
				{ time: '2019-04-17', value: 96.63 },
				{ time: '2019-04-18', value: 76.64 },
				{ time: '2019-04-19', value: 81.89 },
				{ time: '2019-04-20', value: 74.43 },
		]);
	}

	render() {
		return (
			<div className="chart chart-small" ref={ (divElement) => this.divElement = divElement}>
					<div id={this.chartId}/>
			</div>
		)
	}
}