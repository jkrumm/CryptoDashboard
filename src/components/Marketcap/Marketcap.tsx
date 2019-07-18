import React from "react";
import "./Marketcap.scss";
import numeral from "numeral";
import ReactSVG from 'react-svg'
import { Card, Elevation } from "@blueprintjs/core";

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
  const { coinId, name, price, marketCap } = item;

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
      </Card>
    </div>
	)
}