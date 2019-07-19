import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/CounterStore";
import { ICoinStore } from "../../stores/CoinStore";
import { toJS } from 'mobx';
import Marketcap from "../../components/Marketcap/Marketcap";

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
				<Marketcap dashboard={toJS(dashboard)}/>
			</>
		);
	}
}
