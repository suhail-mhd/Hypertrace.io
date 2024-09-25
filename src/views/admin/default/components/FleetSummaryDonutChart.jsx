import React, { useEffect, useState } from "react";
import Card from "components/card";
import axios from "axios";
import { Chart } from "react-google-charts";

const FleetSummaryDonutChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/fleetsummary",
      headers: {
        Authorization: "7ed27cc294aad6876744a6d823bf15d550968435718f8f36679c05fe59ac119e",
      },
    };

    axios
      .request(config)
      .then((response) => {
        const data = response.data.summaryitems[1].plotData;

        // Format data for the donut chart
        const formattedData = [
          ['Category', 'Value'],  // Chart headers
          ['Battery Low Events', data.batterylow.reduce((a, b) => a + b, 0)],
          ['Devices Not Reporting', data.notreporting.reduce((a, b) => a + b, 0)],
          ['Reported Values', data.reporting.reduce((a, b) => a + b, 0)],
        ];

        setChartData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const options = {
    pieHole: 0.4, // This creates the donut chart effect
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
  };

  return (
    <Card extra="rounded-[20px] p-3 h-[380px]">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Donut Chart
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[420px] w-full items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Chart
            chartType="PieChart"
            data={chartData}
            options={options}
            width={"95%"}
            height={"300px"}
          />
        )}
      </div>
    </Card>
  );
};

export default FleetSummaryDonutChart;
