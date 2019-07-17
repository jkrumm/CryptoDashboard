import { nomicsKey, minMarketCap } from '../../config';
import dynamicSort from '../arrayOfObjectSort';

export default async () => {
  const resDashboard = await fetch(
    `https://api.nomics.com/v1/dashboard?key=${nomicsKey}`
  ).then(d => d.json());

  const abstract = await resDashboard
    .filter(function(d) {
      if (d.close * d.availableSupply > minMarketCap) {
        return d;
      }
    })
    .map(d => ({
      coinId: d.currency,
      marketCap: d.close * d.availableSupply
    }))
    .sort(dynamicSort('-marketCap'));

  const marketCapCoins = await abstract.map(d => d.coinId);

  return marketCapCoins;
};
