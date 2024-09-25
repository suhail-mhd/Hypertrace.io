import React, { useEffect, useState } from "react";
import Card from "components/card";
import axios from "axios";
import PieChart, {
  CommonSeriesSettings,
  Legend,
  Series,
  Label,
  Tooltip,
} from "devextreme-react/pie-chart";

const FleetSummaryDonutChart = () => {
  const [chartData, setChartData] = useState([]);
  const [legendData, setLegendData] = useState({});

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  useEffect(() => {
    // Fetch the data from the API
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/fleetsummary",
      headers: {
        userKey: USERKEY,
      },
    };

    axios
      .request(config)
      .then((response) => {
        const data = response.data.summaryitems[1];
        const formattedData = formatChartData(data.plotData, data.displayname);
        setChartData(formattedData);
        setLegendData(data.displayname);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const formatChartData = (plotData, displayname) => {
    const timestamps = plotData.timestamps;
    // Combine the series data with the timestamps into a format PieChart can consume
    return timestamps.map((timestamp, index) => ({
      timestamp,
      batterylow: plotData.batterylow[index],
      notreporting: plotData.notreporting[index],
      reporting: plotData.reporting[index],
    }));
  };

  function customizeTooltip(arg) {
    return {
      text: `${arg.argumentText}<br>${arg.seriesName}: ${arg.valueText}`,
    };
  }

  return (
    <Card extra="rounded-[20px] p-3 h-[450px] relative">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Donut Chart
          </h4>
        </div>
      </div>

      <div className="my-5 flex w-full items-center justify-center">
        <PieChart
          id="pie"
          type="doughnut"
          innerRadius={0.2}
          palette="Ocean"
          dataSource={chartData}
        >
          <CommonSeriesSettings argumentField="timestamp">
            <Label visible={false} />
          </CommonSeriesSettings>

          {/* Series for Battery Low */}
          <Series name={legendData.batterylow} valueField="batterylow" />

          {/* Series for Not Reporting */}
          <Series name={legendData.notreporting} valueField="notreporting" />

          {/* Series for Reporting */}
          <Series name={legendData.reporting} valueField="reporting" />

          <Legend visible={true} position="right" alignment="center" />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
        </PieChart>
      </div>
    </Card>
  );
};

export default FleetSummaryDonutChart;
