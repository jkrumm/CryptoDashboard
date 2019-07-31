import React from 'react';
import {MarketcapTable} from "../../tables/MarketcapTable"

interface ICardTabProps {
	heading: string;
}

export function CardTab(props: ICardTabProps) {
	return (
		<div>
			{props.heading}
			<MarketcapTable/>
		</div>
	)
}
