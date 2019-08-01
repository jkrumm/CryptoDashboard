import React from 'react';
import { Card as CardBlueprint, H4 } from "@blueprintjs/core";
import "./Card.scss";

interface ICardProps {
	heading: string;
	children: any;
}

// interface ICardState {
// 	myRef: any;
// }

export function Card(props:ICardProps) {
	const {heading, children} = props;

	return (
		<div className="card">
			<CardBlueprint>
				<div className="card-heading"><H4>{ heading }</H4></div>
				{children}
			</CardBlueprint>
		</div>
	)
}
