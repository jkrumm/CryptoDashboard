import React, { useState } from "react";
import "./MarketcapBig.scss";
import numeral from "numeral";
import ReactSVG from 'react-svg'
import { Card, Collapse, Elevation, H4, Pre, H3 } from "@blueprintjs/core";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { inject, observer } from "mobx-react";
import { ICounterStore } from "../../stores/CounterStore";
import { ICoinStore } from "../../stores/CoinStore";

interface IContainerProps {
	counterStore?: ICounterStore;
	coinStore?: ICoinStore;
}

// TODO: react-virtualized

@inject("coinStore")
@observer
export class MarketcapBig extends React.Component<IContainerProps> {
	render() {
		const { dashboard } = this.props.coinStore!;

		return (
			<div className="marketcap-big">
				<div className="marketcap-big-list">
					{dashboard.map(
						(item: any, index: any) => 
							<MarketcapListItem item={item} index={index} key={index}/>
					)}
				</div>
			</div>
		)
	}
}

interface IMarketcapListItemProps {
	item: object | any;
	index: number;
}

function MarketcapListItem (props: IMarketcapListItemProps) {
	const [open, setOpen] = useState(false);

	const { item, index } = props;
	const { coinId, name, price, marketCap, percentage, ath, volume, sparklineWeek } = item;

	return (
		<div>
			<div className="marketcap-big-list-line">
				<div><span>{index}</span></div>
				<Card interactive={false} elevation={Elevation.ONE} onClick={() => setOpen(!open)}>

					<div className="marketcap-big-item-icon">
						<ReactSVG src="ada.svg" />
						{`./cryptoIcons/png/icon/${coinId.toLowerCase()}@2x.png` !== undefined ? (
							<img
								alt=" "
								width='24px'
								height='24px'
								src={`./cryptoIcons/png/icon/${coinId.toLowerCase()}@2x.png`}
							/>
						): <></>}
					</div>

					<div className="marketcap-big-item-name">
						<H4>{name}</H4>
						<span>{coinId}</span>
					</div>

					<div className="marketcap-big-item-price">
						<span>{numeral(price).format('0,000.00 $')}</span>
					</div>

					<div className="marketcap-big-item-cap">
						<span>{numeral(marketCap).format('0.00a $')}</span>
					</div>

					<div className="marketcap-big-item-percentage-four">
						<div className={numeral(percentage.day)._value >= 0 ? "green" : "red"}>
							<span>D</span><p>{percentage.day}</p>
						</div>
						<div className={numeral(percentage.week)._value >= 0 ? "green" : "red"}>
							<span>W</span><p>{percentage.week}</p>
						</div>
						<div className={numeral(percentage.month)._value >= 0 ? "green" : "red"}>
							<span>M</span><p>{percentage.month}</p>
						</div>
						<div className={numeral(percentage.year)._value >= 0 ? "green" : "red"}>
							<span>Y</span><p>{percentage.year}</p>
						</div>
					</div>

					<div className="marketcap-big-item-ath">
						<span>{ath.percentage}</span>
					</div>

					<div className="marketcap-big-item-volume">
						<span>{numeral(volume.day).format("0.00a $")}</span>
						<span>{numeral(volume.dayToMonth).format("0 %")}</span>
					</div>

					<div className="marketcap-big-item-sparkline-week">
						<div>
							<Sparklines data={sparklineWeek} width={200} height={75} margin={5}>
								<SparklinesLine color={numeral(percentage.month)._value >= 0 ? "#0f9960" : "#db3737"} />
							</Sparklines>
						</div>
					</div>
				</Card>
			</div>
				<Collapse className="marketcap-big-list-collapse" isOpen={open} >
						<Pre>
							<div>ICONS</div>
							<TradingViewWidget
								symbol={coinId + "USD"}
								theme={Themes.DARK}
								locale="us"
								autosize={true}
							/>
								{/* <div className="content" dangerouslySetInnerHTML={{__html: widget}}></div> */}
						</Pre>
				</Collapse>
		</div>
	)
}