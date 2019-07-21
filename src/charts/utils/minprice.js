import React from "react";
import { LinePath } from '@vx/shape';

import formatMoney from '../../utils/formatMoney';
export default ({ data, label, yText, x, y }) => {
  return (
    <g>
      <LinePath
        data={data}
        x={x}
        y={y}
        stroke="#4682b4"
        strokeDasharray="5,5"
        strokeOpacity="0.35"
      />
      <text y={yText} dy="-.55em" dx="0.57em" fill="#f5f8fa" fontSize="12">
        {formatMoney(label)}
      </text>
    </g>
  );
};
