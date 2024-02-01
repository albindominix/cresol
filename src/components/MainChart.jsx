import React from "react";
import Chart from "react-apexcharts";
import { useGobalState } from "../context/ContextApi";
function MainChart() {
  const{transaction,groupExpenses}=useGobalState()

  const groupedExpenses = groupExpenses(transaction);


  const labelsData =groupedExpenses.map((item,index)=>item.category)
  const seriesData =groupedExpenses.map((item,index)=>item.amount)

  let series = seriesData;
  let options = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: labelsData,
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      // text: "Monochrome Pie",
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="max-w-[400px]">
      <Chart options={options} series={series} type="pie" />
    </div>
  );
}

export default MainChart;
