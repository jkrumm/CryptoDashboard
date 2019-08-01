import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/Counter.store";
import { ICoinStore } from "../../stores/Coin.store";
import {CardWrapper, Card, CardTab, CoinCardSmall} from "../../cards";

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
				<CardWrapper tabs={false} rows={false}>
					<CoinCardSmall heading="Card 1">1</CoinCardSmall>
					<CoinCardSmall heading="Card 2">2</CoinCardSmall>
					<CoinCardSmall heading="Card 3">2</CoinCardSmall>
				</CardWrapper>
				<CardWrapper tabs={false} rows={false}>
					<Card heading="Card 1">1</Card>
					<Card heading="Card 2">2</Card>
					<Card heading="Card 3">2</Card>
				</CardWrapper>
				<CardWrapper tabs={true} rows={false} heading='Market Overview'>
					<CardTab heading="Card 1"/>
					<CardTab heading="Card 2"/>
					<CardTab heading="Card 3"/>
				</CardWrapper>
			</>
		);
	}
}
