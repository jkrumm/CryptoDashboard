import React from 'react';
import {MarketcapTable} from "../tables/Marketcap.table"

// TODO: Remove onlu use Simple.card

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
