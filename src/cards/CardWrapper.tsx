import React, { Component } from 'react';
import "./Card.scss";
import { Tab, Tabs, Card, H4 } from "@blueprintjs/core";

interface ICardWrapperProps {
	tabs: boolean;
	rows: boolean;
	children: any;
	heading?: any;
	height?: string;
}

interface ICardWrapperState {
	selectedTabId: number;
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
		const { tabs, rows, heading, children, height } = this.props;

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
										<Tab key={index} id={index} title={item.props.heading} />
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
				<div style={{height, }} className={rows ? 'card-wrapper wrap' : 'card-wrapper'}>
					{children}
				</div>
			)
		}
	}
}
