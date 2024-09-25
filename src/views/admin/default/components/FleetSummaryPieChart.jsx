import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "components/card";

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from "devextreme-react/pie-chart";

function pointClickHandler(e) {
  toggleVisibility(e.target);
}

function legendClickHandler(e) {
  const arg = e.target;
  const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
  toggleVisibility(item);
}

function toggleVisibility(item) {
  item.isVisible() ? item.hide() : item.show();
}

const FleetSummaryPieChart = () => {
  const [chartData, setChartData] = useState([]);

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/fleetsummary",
        headers: {
          userKey: USERKEY,
        },
      };

      try {
        const response = await axios.request(config);
        const plotData = response.data.summaryitems[0].plotData;

        // Set the data for the PieChart
        setChartData(plotData);
      } catch (error) {
        console.error("Error fetching fleet summary data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card extra="rounded-[20px] p-3 h-[380px] relative">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Pie Chart
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[420px] w-full items-center justify-center">
        <PieChart
          id="pie"
          dataSource={chartData}
          palette={["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD"]} 
          onPointClick={pointClickHandler}
          onLegendClick={legendClickHandler}
        >
          <Series argumentField="category" valueField="value">
            <Label visible={true}>
              <Connector visible={true} width={1} />
            </Label>
          </Series>

          <Size width={500} />
        </PieChart>
      </div>
    </Card>
  );
};

export default FleetSummaryPieChart;
