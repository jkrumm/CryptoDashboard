import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/CounterStore";
import { ICoinStore } from "../../stores/CoinStore";
import { toJS } from 'mobx';
// import CardChart from "../../charts/CardChart";
// import marketCap from "../../utils/CoinAPI/marketCap";

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
		// const resMarketCap = marketCap(365);

		return (
			<>
				<H1>Home</H1>
				{/* <CardChart data={resMarketCap} /> */}
				<H3>Counter : {clickCounter}</H3>
				<Button onClick={increment}>Increase</Button>
				<Button onClick={decrement}>Decrease</Button>
			</>
		);
	}
}
