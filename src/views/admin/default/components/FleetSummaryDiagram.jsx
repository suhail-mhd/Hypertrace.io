import React from "react";
import Card from "components/card";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Critical: 590,
    Reported: 800,
    NotReported: 1400,
  },
  {
    name: "Page B",
    Critical: 868,
    Reported: 967,
    NotReported: 1506,
  },
  {
    name: "Page C",
    Critical: 1397,
    Reported: 1098,
    NotReported: 989,
  },
  {
    name: "Page D",
    Critical: 1480,
    Reported: 1200,
    NotReported: 1228,
  },
  {
    name: "Page E",
    Critical: 1520,
    Reported: 1108,
    NotReported: 1100,
  },
  {
    name: "Page F",
    Critical: 1400,
    Reported: 680,
    NotReported: 1700,
  },
];

const FleetSummaryDiagram = () => {
  return (
    <Card extra="!p-[20px] text-center h-96">
      <div className="mb-5 flex justify-between">
      <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Your Pie Chart
          </h4>
        </div>
        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>
      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{  angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Reported" barSize={20} fill="#38A6F5" />
            <Area
              type="monotone"
              dataKey="NotReported"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Line type="monotone" dataKey="Critical" stroke="#EB3223" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default FleetSummaryDiagram;
