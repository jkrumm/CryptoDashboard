import React from 'react';
import { Card as CardBlueprint, H4 } from "@blueprintjs/core";
import "./Card.scss";
import { SmallChart } from "../charts/Small.chart"

interface IChartSmallProps {
	heading: string;
	children: any;
}

// interface ICoinCardSmallState {
// 	myRef: any;
// }

export function ChartCardSmall(props: IChartSmallProps) {
	const {heading, children} = props;

	return (
		<div className="card card-chart-small">
			<CardBlueprint>
				<div className="card-heading"><H4>{ heading }</H4></div>
				<SmallChart />
				{children}
			</CardBlueprint>
		</div>
	)
}
