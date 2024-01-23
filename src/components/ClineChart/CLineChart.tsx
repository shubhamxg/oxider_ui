import "./styles.css";
import Chart from "react-apexcharts";

import React from "react";

export default function CLineChart() {
  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1983, 1234],
    },
    stroke: {
      width: 3,
      dashArray: 5,
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
          opacity: 0.2,
        },
      },
      row: {
        colors: undefined, // Alternating colors for rows
        opacity: 0.5,
      },
      column: {
        colors: undefined, // Alternating colors for columns
        opacity: 0.5,
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 60, 45],
    },
    {
      name: "series-2",
      data: [37, 70, 40, 20, 49, 20, 40, 80, 95],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height="350px"
      width="745px"
    ></Chart>
  );
}
