import marketCapCoinsData from './marketCapCoins';
import { nomicsKey } from '../../config';

export default async () => {
  async function series() {
    return {
      sparkline: await fetch(
        `https://api.nomics.com/v1/currencies/sparkline?key=${nomicsKey}&start=2018-12-20T00%3A00%3A00Z`
      ).then(d => d.json().catch(() => alert('test (sparklines.js)'))),
      marketCapCoins: await marketCapCoinsData()
    };
  }

  const result = await series();

  const sparkline = await result.sparkline.filter((d, i) =>
    result.marketCapCoins.some(e => d.currency === e)
  );

  return sparkline;
};
