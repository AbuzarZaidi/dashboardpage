import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData,OptionsVal }) {
  return(
   <Line data={chartData} options={OptionsVal}/>
  )
}

export default LineChart;