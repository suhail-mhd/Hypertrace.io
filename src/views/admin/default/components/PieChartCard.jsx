import React, { useEffect, useState } from "react";
import FleetSummaryPieChart from "components/charts/FleetSummaryPieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";
import axios from "axios";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  is3D: true,
};

const PieChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3 h-[380px]">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Your Pie Chart
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          {/* <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select> */}
        </div>
      </div>

      <div className="mb-auto flex h-[420px] w-full items-center justify-center">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"95%"}
          height={"300px"}
        />
      </div>
    </Card>
  );
};

export default PieChartCard;
