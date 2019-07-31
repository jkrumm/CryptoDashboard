import React from 'react'

interface ICardTabProps {
	heading: string;
}

export function CardTab(props: ICardTabProps) {
	return (
		<div>
			{props.heading}
		</div>
	)
}
