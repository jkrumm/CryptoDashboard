import { Button, H1, H3 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import React from "react";
import { ICounterStore } from "../../stores/CounterStore";
import { ICoinStore } from "../../stores/CoinStore";
import { toJS } from 'mobx';

interface IContainerProps {
	counterStore?: ICounterStore;
	coinStore?: ICoinStore;
}

@inject("counterStore", "coinStore")
@observer
export class Home extends React.Component<IContainerProps> {
	render() {
		// const { increment, decrement } = this.props.counterStore!;
		const { dashboard, clickCounter, increment, decrement } = this.props.coinStore!;
		const dashbaordToJS = toJS(dashboard);
		console.log (dashbaordToJS, toJS(dashboard), clickCounter);

		return (
			<>
				<H1>Home</H1>
				<H3>Counter : {clickCounter}</H3>
				<Button onClick={increment}>Increase</Button>
				<Button onClick={decrement}>Decrease</Button>
				<div className="dashboard">
					{dashbaordToJS.map(
						(item: any, index: any) => 
							<div key={index}>
								{item.coinId}{item.name}{item.price}
							</div>
					)}
				</div>
			</>
		);
	}
}
