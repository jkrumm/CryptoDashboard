import { cryptoCompareKey, mercuryKey } from '../../config';
import MercuryClient from 'mercury-client';

export default async article => ({
	feed: await getNewList(),
	article: await getMercury(article)
});

// TODO: MAP the finalNewList over Mercury to clear articles

const getNewList = async () => {
	const resNewsList = await fetch(
		`https://min-api.cryptocompare.com/data/v2/news/?feeds=ccn,cointelegraph,coindesk,99bitcoins,coingape,newsbtc&key=${cryptoCompareKey}`
	);
	return await resNewsList.json();
};

const getMercury = async article => {
	const mc = new MercuryClient(mercuryKey);
	return await mc.parse(article);
};
