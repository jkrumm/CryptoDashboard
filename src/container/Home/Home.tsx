import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/Counter.store";
import { ICoinStore } from "../../stores/Coin.store";
import {CardWrapper, CardTab, ChartCardSmall} from "../../cards";

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
				<CardWrapper tabs={false} rows={false} height="400px">
					<ChartCardSmall heading="Card 1" type={'area'}/>
					<ChartCardSmall heading="Card 2" type={'area'}/>
					<ChartCardSmall heading="Card 3" type={'area'}/>
				</CardWrapper>
				<CardWrapper tabs={false} rows={false} height="400px">
					<ChartCardSmall heading="Card 1" type={'candle'}/>
					<ChartCardSmall heading="Card 2" type={'candle'}/>
					<ChartCardSmall heading="Card 3" type={'candle'}/>
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
