import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import Card from "components/card";

const FleetSummaryLineChart = () => {
  const [chartData, setChartData] = useState([]);

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/fleetsummary",
        headers: {
          userKey: USERKEY,
        },
      };

      try {
        const response = await axios.request(config);
        const data = response.data.summaryitems[2].plotData;

        // Prepare chart data in the format needed by react-google-charts
        const formattedData = [
          ["Time", "Battery %", "Temperature (°C)", "Vibration (m/s²)"], // Column headers
          ...data.timestamps.map((timestamp, index) => [
            timestamp,
            data.battery[index],
            data.temperature[index],
            data.vibration[index],
          ]),
        ];

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    backgroundColor: "transparent",
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "#a3aed0",
      },
    },
    hAxis: {
      title: "Time",
      textStyle: { color: "#a3aed0" },
    },
    vAxis: {
      title: "Values",
      textStyle: { color: "#a3aed0" },
    },
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c"], // Different colors for each line
    curveType: "function", // Smooth curve
  };

  return (
    <Card extra="rounded-[20px] p-3 h-[380px]">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Line Graph
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[420px] w-full items-center justify-center">
        {chartData.length > 0 ? (
          <Chart
            chartType="LineChart"
            width={"95%"}
            height={"300px"}
            data={chartData}
            options={options}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Card>
  );
};

export default FleetSummaryLineChart;
