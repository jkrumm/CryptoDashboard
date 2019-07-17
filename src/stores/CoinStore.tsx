import { nomicsKey, minMarketCap } from '../config/config';
import { action, observable, autorun } from "mobx";
import dynamicSort from '../utils/arrayOfObjectSort';
import cryptocurrencies from 'cryptocurrencies';
import Numeral from 'numeral';

export interface ICoinStore {
	clickCounter: number;
	// dashboard: object[];
	dashboard: any;
	increment(): void;
  decrement(): void;
  autorunGO: any;
}

export class CoinStore implements ICoinStore {
	@observable clickCounter = 0;
	@observable dashboard = [];

	@action.bound increment() {
		this.clickCounter++;
	}

	@action.bound decrement() {
		this.clickCounter--;
	}

  autorunGO = autorun(async () => {
    const resDashboard = await fetch(
		`https://api.nomics.com/v1/dashboard?key=${nomicsKey}`
	).then(data => data.json());

	const dashboard = await resDashboard
		.filter(function(d) {
			if (d.close * d.availableSupply > minMarketCap) {
				return d;
			}
		})
		.map(d => {
			const percentage = open => Numeral(d.close / open - 1).format(' 0.00 %');
			const percentageToMonth = volume =>
				Numeral(d.monthVolume / 30 / volume).format(' 0.00 %');
			return {
				coinId: d.currency,
				name: cryptocurrencies[d.currency],
				price: d.close,
				marketCap: d.close * d.availableSupply,
				supply: d.availableSupply,
				maxSupply: d.maxSupply,
				volume: {
					day: d.dayVolume,
					dayToMonth: percentageToMonth(d.dayVolume),
					week: d.weekVolume,
					month: d.monthVolume,
					year: d.yearVolume
				},
				ath: {
					price: d.high,
					percentage: percentage(d.high),
					time: d.highTimestamp,
					exchange: d.highExchange,
					currency: d.highQuoteCurrency
				},
				percentage: {
					day: percentage(d.dayOpen),
					week: percentage(d.weekOpen),
					month: percentage(d.monthOpen),
					year: percentage(d.yearOpen)
				}
			};
		})
		.sort(dynamicSort('-marketCap'));

		console.log(dashboard);
		this.dashboard = dashboard;
	});
}