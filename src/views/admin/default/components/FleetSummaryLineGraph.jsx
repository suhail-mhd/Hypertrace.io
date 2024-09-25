import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Card from "components/card";
import {
  Chart,
  Series,
  ArgumentAxis,
  ValueAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  Legend,
  Margin,
  Tooltip,
  Label,
  Format,
} from "devextreme-react/chart";

const types = ["spline", "stackedspline", "fullstackedspline"];

const FleetSummaryLineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [type, setType] = useState(types[0]);

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  useEffect(() => {
    let config = {
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
        const data = response.data.summaryitems[2].plotData;
        const chartData = data.timestamps.map((timestamp, index) => ({
          timestamp,
          battery: data.battery[index],
          temperature: data.temperature[index],
          vibration: data.vibration[index],
        }));
        setChartData(chartData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = useCallback(
    (e) => {
      setType(e.value);
    },
    [setType]
  );

  return (
    <Card extra="rounded-[20px] p-3 h-[450px] relative">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Fleet Summary Line Graph
          </h4>
        </div>
      </div>

      <div className="my-5 flex w-full items-center justify-center">
        <Chart palette="Violet" dataSource={chartData}>
          <CommonSeriesSettings argumentField="timestamp" type={type} />
          <CommonAxisSettings>
            <Grid visible={true} />
          </CommonAxisSettings>

          {/* Add ValueAxis for controlling Y-axis */}
          <ValueAxis
            min={20} // Start from 20
            tickInterval={20} // Interval of 20 units
          >
            <Label>
              <Format type="fixedPoint" />
            </Label>
          </ValueAxis>

          <Series valueField="battery" name="Battery %" />
          <Series valueField="temperature" name="Temperature (°C)" />
          <Series valueField="vibration" name="Vibration (m/s²)" />
          <Margin bottom={20} />
          <ArgumentAxis allowDecimals={false}>
            <Label>
              <Format type="datetime" />
            </Label>
          </ArgumentAxis>
          <Legend verticalAlignment="top" horizontalAlignment="right" />
          <Tooltip enabled={true} />
        </Chart>
      </div>
    </Card>
  );
};

export default FleetSummaryLineChart;
