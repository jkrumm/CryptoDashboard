/* tslint:disable */
import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { withParentSize } from '@vx/responsive';
import { scaleTime, scaleLinear } from '@vx/scale';
import { LinePath, AreaClosed, Bar, Line } from '@vx/shape';
import { AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { withTooltip, Tooltip } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { bisector } from 'd3-array';
import formatMoney from '../utils/formatMoney';
import Numeral from 'numeral';

import MaxPrice from './utils/maxprice';
import MinPrice from './utils/minprice';

const margin = { top: 60, right: 0, bottom: 40, left: 0 };

// UTIL
const extent = (arr, fn) => [min(arr, fn), max(arr, fn)];
const min = (arr, fn) => Math.min(...arr.map(fn));
const max = (arr, fn) => Math.max(...arr.map(fn));
const x = d => new Date(d.timestamp);
const y = d => d.market_cap;
const bisectDate = bisector(d => x(d)).left;

interface ICardChartProps {
  data: any;
  parentWidth: any;
  parentHeight: any;
  tooltipLeft: any;
  tooltipTop: any;
  tooltipData: any;
  showTooltip: any;
  hideToolTip: any;
  svg: any;
}

class CardChartContainer extends Component<ICardChartProps> {
  state = {
    width: this.props.parentWidth - margin.left - margin.right,
    height: this.props.parentHeight - margin.top - margin.bottom,
    coinID: '',
    coinName: 'MarketCap',
    timeFrameName: 'Last 30 days'
  };

  componentDidMount() {
    console.log(this.state, this.props);
  }

  render() {
    const {
      data,
      parentHeight,
      tooltipLeft,
      tooltipTop,
      tooltipData,
      showTooltip,
      hideToolTip
    } = this.props;
    if (!data) return null;

    console.log(data);

    const prices = Object.keys(data).map(k => {
      return { time: k, price: data[k].market_cap };
    });
    // PRICES
    // const currentPrice = prices[prices.length - 1].price;
    // const firstPrice = prices[0].price;
    // const priceChange = currentPrice - firstPrice;
    // const priceChangePercent = currentPrice / firstPrice - 1;
    // const hasIncreased = currentPrice > firstPrice;
    const minPrice = min(data, y);
    const maxPrice = max(data, y);
    const firstPoint = data[0];
    const lastPoint = data[data.length - 1];

    const xScale = scaleTime({
      range: [0, this.state.width],
      domain: extent(data, x)
    });

    const yScale = scaleLinear({
      range: [this.state.height, 0],
      domain: extent(data, y),
      nice: true
    });
    return (
      <div className="card-chart-wrapper">
        <Card interactive={true} elevation={Elevation.TWO}>
          <div id="header">
            <div>
              <div>
                <h1>{this.state.coinName}</h1>
              </div>
              <div>{this.state.timeFrameName}</div>
            </div>
            <div>
              <div>
                {/* <h1>{formatMoney(currentPrice)}</h1> */}
              </div>
              {/* <div className={hasIncreased ? 'increased' : 'decreased'}> */}
                <h3>
                  {/* {formatMoney(priceChange)} /&nbsp;
                  {Numeral(priceChangePercent).format('0.00 %')} */}
                </h3>
              </div>
            </div>
          {/* </div> */}
          <div id="chart">
            <svg
              // ref={s => (this.svg = s)}
              width={this.state.width}
              height={parentHeight}
            >
              <AxisBottom
                data={data}
                scale={xScale}
                x={d => xScale(x(d))}
                top={yScale(minPrice)}
                hideTicks
                hideAxisLine
                tickLabelProps={(val, i) => ({ fontSize: 14, fill: '#f5f8fa' })}
                numTicks={4}
              />
              <LinearGradient
                id="area-fill"
                from="#4682b4"
                to="#4682b4"
                fromOpacity={0.4}
                toOpacity={0.07}
              />

              <AreaClosed
                data={data}
                yScale={yScale}
                fill="url(#area-fill)"
                stroke="transparent"
                x={d => xScale(x(d))}
                y={d => yScale(y(d))}
              />
              <LinePath
                data={data}
                stroke="#4682b4"
                strokeOpacity="0.8"
                x={d => xScale(x(d))}
                y={d => yScale(y(d))}
                strokeWidth={1}
              />
              <MaxPrice
                data={[
                  { timestamp: x(firstPoint), market_cap: maxPrice },
                  { timestamp: x(lastPoint), market_cap: maxPrice }
                ]}
                x={d => xScale(x(d))}
                y={d => yScale(y(d))}
                label={maxPrice}
                yText={yScale(maxPrice)}
              />
              {/* <MinPrice
                data={[
                  { timestamp: x(firstPoint), market_cap: minPrice },
                  { timestamp: x(lastPoint), market_cap: minPrice }
                ]}
                yScale={yScale}
                xScale={xScale}
                x={d => xScale(x(d))}
                y={d => yScale(y(d))}
                label={minPrice}
                yText={yScale(minPrice)}
              /> */}
              <Bar
                width={this.state.width}
                height={this.state.height}
                fill="transparent"
                // onMouseLeave={data => event => hideTooltip()}
                onMouseMove={data => event => {
                  // const { x: xPoint } = localPoint(this.svg, event);
                  // const x0 = xScale.invert(xPoint);
                  // const index = bisectDate(data, x0, 1);
                  // const d0 = data[index - 1];
                  // const d1 = data[index];
                  // const d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
                  // showTooltip({
                  //   tooltipData: d,
                  //   tooltipLeft: xScale(x(d)),
                  //   tooltipTop: yScale(y(d))
                  // });
                }}
              />
            </svg>
            {tooltipData && (
              <g>
                <Line
                  from={{
                    x: tooltipLeft,
                    y: yScale(
                      y({ timestamp: x(firstPoint), market_cap: maxPrice })
                    )
                  }}
                  to={{
                    x: tooltipLeft,
                    y: yScale(
                      y({ timestamp: x(firstPoint), market_cap: minPrice })
                    )
                  }}
                  stroke="#ffffff"
                />
              </g>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

export default withParentSize(withTooltip(CardChartContainer));
