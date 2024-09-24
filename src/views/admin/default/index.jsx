import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

import {
  columnsDataCheck,
  columnsDataComplex,
  fleetView,
} from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import FleetViewTable from "views/admin/default/components/FleetViewTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import MapView from "views/admin/default/components/MapView";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import fleetViewData from "./variables/fleetViewData.json";
import Card from "components/card";
import userBanner from "../../../assets/img/dashboards/illustration-john-light 1.png";
import SliderTiles from "./components/SliderTiles";
import FleetSummaryDiagram from "./components/FleetSummaryDiagram";

const Dashboard = () => {
  const loc = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      {/* Card widget */}

      {loc ? (
        <div className="mt-3 grid grid-cols-1">
          <Card
            extra="!flex-row flex-grow items-center rounded-[6px] relative"
            style={{ height: "200px" }}
          >
            <div className="h-50 ml-4 flex w-auto flex-col">
              <h4 className="text-xl font-bold text-blue-1000 dark:text-white">
                Account: {loc.accountType} 🎉
              </h4>
              <p className="mb-6 font-dm text-sm font-medium text-gray-600">
                Your journey to smarter fleet management <br /> starts here!
              </p>
              <button className="linear rounded-[20px] bg-gray-1000 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-blue-1000 dark:hover:bg-brand-300 dark:active:opacity-90 md-max:w-32">
                View Details
              </button>
            </div>
            <div className="absolute right-14 ml-[18px] flex h-[90px] w-auto flex-row items-center md-max:right-3 md-max:w-35p">
              {/* <img src={loc.imagepath} alt="" /> */}
              <img src={userBanner} alt="" />
            </div>
          </Card>
        </div>
      ) : (
        ""
      )}

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2">
          {/* <TotalSpent /> */}
          {/* <FleetSummaryDiagram /> */}
          <PieChartCard />
        </div>
        <SliderTiles />
      </div>

      {/* Table & Map */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <div>
          <FleetViewTable
            rowsPerPage={5}
          />
        </div>
        <MapView />
      </div>
    </div>
  );
};

export default Dashboard;
