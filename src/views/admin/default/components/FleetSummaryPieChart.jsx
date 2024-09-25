import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import Card from "components/card";

const FleetSummaryPieChart = () => {
  // State to store pie chart data
  const [chartData, setChartData] = useState([["Category", "Value"]]);

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  useEffect(() => {
    // API config
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/fleetsummary",
      headers: {
        userKey: USERKEY,
      },
    };

    // Fetching data from the API
    axios
      .request(config)
      .then((response) => {
        const responseData = response.data.summaryitems[0].plotData;

        // Map the plotData from the response to format required by the chart
        const formattedData = [["Category", "Value"]]; // Initial chart structure
        responseData.forEach((item) => {
          formattedData.push([item.category, item.value]);
        });

        // Set the chart data to the state
        setChartData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Chart options
  const options = {
    is3D: true,
    backgroundColor: "transparent",
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "#a3aed0",
      },
    },
    chartArea: {
      left: 20,
      top: 20,
      right: 20,
      bottom: 20,
    },
    pieSliceText: "value",
  };

  return (
    <Card extra="rounded-[20px] p-3 h-[380px]">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Pie Chart
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[420px] w-full items-center justify-center">
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          width={"95%"}
          height={"300px"}
        />
      </div>
    </Card>
  );
};

export default FleetSummaryPieChart;
