import { nomicsKey } from "../../config/config";
import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';

export default async startDate => {
	const todayDate = format(new Date(), 'YYYY-MM-DD');
	const startDateSub = format(subDays(todayDate, startDate), 'YYYY-MM-DD');
	let startDateF = `${startDateSub}T00%3A00%3A00Z`;
	let endDate = `${todayDate}T00%3A00%3A00Z`;

	console.log(todayDate, startDateSub);

	const resMarketCap = await fetch(
		`https://api.nomics.com/v1/market-cap/history?key=${nomicsKey}&start=${startDateF}&end=${endDate}`
	);

	return await resMarketCap.json();
};
