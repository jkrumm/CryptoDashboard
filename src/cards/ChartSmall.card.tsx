import React from 'react';
import { Card as CardBlueprint, H4 } from "@blueprintjs/core";
import "./Card.scss";
import { AreaChart } from "../charts/Area.chart";
import { CandleChart } from "../charts/Candlestick.chart";

interface IChartSmallProps {
	heading: string;
	type: 'area' | 'candle';
	// children: any;
}

// interface ICoinCardSmallState {
// 	myRef: any;
// }

export function ChartCardSmall(props: IChartSmallProps) {
	const {heading, type} = props;

	return (
		<div className="card card-chart-small">
			<CardBlueprint>
				<div className="card-heading"><H4>{ heading }</H4></div>
				{type === 'candle' ? <CandleChart/> : <AreaChart />}
			</CardBlueprint>
		</div>
	)
}
