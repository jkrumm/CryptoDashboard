import React from "react";
import "./Marketcap.scss";
import numeral from "numeral";
import ReactSVG from 'react-svg'
import { Card, Elevation } from "@blueprintjs/core";
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface IMarketcapProps {
  dashboard: [];
}

export default function Marketcap (props: IMarketcapProps) {
	const { dashboard } = props;

	return (
		<div className="marketcap">
      <div className="marketcap-list">
        {dashboard.map(
          (item: any, index: any) => 
            <MarketcapListItem item={item} index={index} key={index}/>
        )}
      </div>
    </div>
	)
}

interface IMarketcapListItemProps {
  item: object | any;
  index: number;
}


function MarketcapListItem (props: IMarketcapListItemProps) {
  const { item, index } = props;
  const { coinId, name, price, marketCap, percentage, ath, volume, sparklineWeek } = item;

	return (
		<div>
      <div><span>{index}</span></div>
      <Card interactive={false} elevation={Elevation.ONE}>
        <div className="marketcap-item-icon">
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
        <div className="marketcap-item-name">
          <h4>{name}</h4>
          <span>{coinId}</span>
        </div>
        <div className="marketcap-item-price">
          <span>{numeral(price).format('0,000.00 $')}</span>
        </div>
        <div className="marketcap-item-cap">
          <span>{numeral(marketCap).format('0.00a $')}</span>
        </div>
        <div className="marketcap-item-percentage-four">
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
        <div className="marketcap-item-ath">
          <span>{ath.percentage}</span>
        </div>
        <div className="marketcap-item-volume">
          <span>{numeral(volume.day).format("0.00a $")}</span>
          <span>{numeral(volume.dayToMonth).format("0 %")}</span>
        </div>
        <div className="marketcap-item-sparkline-week">
          <div>
            <Sparklines data={sparklineWeek} width={200} height={75} margin={5}>
              <SparklinesLine color={numeral(percentage.month)._value >= 0 ? "#0f9960" : "#db3737"} />
            </Sparklines>
          </div>
        </div>
      </Card>
    </div>
	)
}