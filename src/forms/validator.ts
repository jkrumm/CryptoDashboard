import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

export const plugins = {
  dvr: dvr(validatorjs),
};