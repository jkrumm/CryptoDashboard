import React from 'react';
import { Card as CardBlueprint, H4 } from "@blueprintjs/core";
import "./Card.scss";
import { SmallChart } from "../charts/Small.chart"

interface ICoinCardSmallProps {
	heading: string;
	children: any;
}

// interface ICoinCardSmallState {
// 	myRef: any;
// }

export function CoinCardSmall(props: ICoinCardSmallProps) {
	const {heading, children} = props;

	return (
		<div className="card card-coin-small">
			<CardBlueprint>
				<div className="card-heading"><H4>{ heading }</H4></div>
				<SmallChart/>
				{children}
			</CardBlueprint>
		</div>
	)
}
