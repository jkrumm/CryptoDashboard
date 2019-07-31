import React from 'react';
import { Card as CardBlueprint, H4 } from "@blueprintjs/core";
import "./CardWrapper.scss";

interface ICardProps {
	heading: string;
}

export function Card(props: ICardProps) {
	const {heading} = props;

	return (
		<div className="card">
			<CardBlueprint>
				<div className="card-heading"><H4>{ heading }</H4></div>
			</CardBlueprint>
		</div>
	)
}
