import React, { Component } from 'react';
import "./CardWrapper.scss";
import { Tab, Tabs, Card, H4 } from "@blueprintjs/core";

interface ICardWrapperProps {
	tabs: boolean
	rows: boolean;
	spaceBetween: number
	children: any;
	heading?: any;
}

interface ICardWrapperState {
	selectedTabId: number
}

export class CardWrapper extends Component<ICardWrapperProps, ICardWrapperState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedTabId: 0
		}
		this.handleTabChange = this.handleTabChange.bind(this)
	}

	// componentDidMount() {
	//   console.log(this.props.children)
	// }

	handleTabChange(newTab) {
		this.setState({selectedTabId: newTab})
	}

	public render() {
		const { tabs, rows, spaceBetween, heading, children } = this.props;

		if (tabs) {
			return (
				<div className="card-wrapper">
					<div className="card">
						<Card>
							<div className="card-heading">
								<H4> { heading } </H4>
								<Tabs
									id="TabsExample"
									onChange={this.handleTabChange}
									selectedTabId={this.state.selectedTabId}
									large={true}
								>
									{children.map((item, index) => (
										<Tab id={index} title={item.props.heading} />
									))}
									<Tabs.Expander />
								</Tabs>
							</div>
							{children[this.state.selectedTabId]}
						</Card>
					</div>
				</div>
			)
		} else {
			return (
				<div className={rows ? 'card-wrapper wrap' : 'card-wrapper'}
					data-spaceBetween={spaceBetween}
				>
					{children}
				</div>
			)
		}
	}
}
