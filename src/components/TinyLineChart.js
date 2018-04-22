import React from 'react';
import { LineChart, Line } from 'recharts';

const TinyLineChart = props => {
  return (
    <LineChart width={270} height={90} data={props.data}>
      <Line type="monotone" dataKey="pv" stroke="#ffffff" strokeWidth={2} />
    </LineChart>
  );
};

export default TinyLineChart;
