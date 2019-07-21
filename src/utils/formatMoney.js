import Numeral from 'numeral';
import _ from 'lodash/assign';

// _.assign(Numeral.languageData('en'), {
//   abbreviations: {
//     thousand: 'K',
//     million: 'M',
//     billion: 'B',
//     trillion: 'T'
//   }
// });

// Numeral.register('locale', 'custom', {
//   delimiters: {
//     thousands: ' ',
//     decimal: '.'
//   },
//   abbreviations: {
//     thousand: 'k',
//     million: 'M',
//     billion: 'B',
//     trillion: 'T'
//   },
//   ordinal: function(number) {
//     return number === 1 ? 'er' : 'ème';
//   },
//   currency: {
//     symbol: '$'
//   }
// });

// // switch between locales
// Numeral.locale('custom');

export default function(number, digits) {
  if (Numeral(number).format('0').length > 6) {
    return Numeral(number).format('$ 0,0.00 a');
  } else {
    return Numeral(number).format('$ 0,0.00');
  }
}

// export default function(amount, digits) {
//   if (!digits) {
//     digits = 0;
//   }
//   const options = {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: digits
//   };
//   // if its a whole, dollar amount, leave off the .00
//   if (amount % 100 === 0) options.minimumFractionDigits = 0;
//   const formatter = new Intl.NumberFormat('en-US', options);
//   // return formatter.format(amount / 100);
//   return formatter.format(amount);
// }
