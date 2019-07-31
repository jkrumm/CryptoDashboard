import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/CounterStore";
import { ICoinStore } from "../../stores/CoinStore";
import {CardWrapper, Card, CardTab} from "../../components/Cards";

interface IContainerProps {
	counterStore?: ICounterStore;
	coinStore?: ICoinStore;
}

@inject("counterStore", "coinStore")
@observer
export class Home extends React.Component<IContainerProps> {
	render() {
		const { clickCounter, increment, decrement } = this.props.counterStore!;
		const { dashboard } = this.props.coinStore!;

		return (
			<>
				<H1>Home</H1>
				<H3>Counter : {clickCounter}</H3>
				<Button onClick={increment}>Increase</Button>
				<Button onClick={decrement}>Decrease</Button>
				<CardWrapper tabs={false} rows={false} spaceBetween={30}>
					<Card heading="Card 1"/>
					<Card heading="Card 2"/>
					<Card heading="Card 3"/>
				</CardWrapper>
				<CardWrapper tabs={true} rows={false} spaceBetween={30} heading='Market Overview'>
					<CardTab heading="Card 1"/>
					<CardTab heading="Card 2"/>
					<CardTab heading="Card 3"/>
				</CardWrapper>
			</>
		);
	}
}
