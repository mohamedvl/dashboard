import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({title,data,dataKey,grid}) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width={"100%"} aspect={4/1}>
      <LineChart data={data}>
      <XAxis dataKey={"name"} stroke="#5550bd"/>
      <Line type={"momotone"} dataKey={dataKey}/>
      <Tooltip/>
      {grid&&<CartesianGrid/>}
      <Legend/>
      </LineChart>
      
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
