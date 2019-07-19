import React, { useState } from "react";
import "./Marketcap.scss";
import numeral from "numeral";
import ReactSVG from 'react-svg'
import { Card, Elevation, Collapse, Pre } from "@blueprintjs/core";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

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

const widget = `<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_1de3c"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTC/USD/" rel="noopener" target="_blank"><span class="blue-text">BTC/USD Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "BTC/USD",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "Dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_legend": true,
  "save_image": false,
  "studies": [
    "MACD@tv-basicstudies",
    "RSI@tv-basicstudies"
  ],
  "container_id": "tradingview_1de3c"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->`;

function MarketcapListItem (props: IMarketcapListItemProps) {
  const [open, setOpen] = useState(false);

  const { item, index } = props;
  const { coinId, name, price, marketCap, percentage, ath, volume, sparklineWeek } = item;

	return (
    <div>
      <div className="marketcap-list-line">
        <div><span>{index}</span></div>
        <Card interactive={false} elevation={Elevation.ONE} onClick={() => setOpen(!open)}>

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
       <Collapse className="marketcap-list-collapse" isOpen={open} >
            <Pre>
              <div>ICONS</div>
              <TradingViewWidget
                symbol={coinId + "USD"}
                theme={Themes.DARK}
                locale="us"
                autosize
              />
                {/* <div className="content" dangerouslySetInnerHTML={{__html: widget}}></div> */}
            </Pre>
        </Collapse>
    </div>
	)
}