import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import OlaMap from "views/admin/default/components/OlaMap";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import Card from "components/card";
import userBanner from "../../../assets/img/dashboards/illustration-john-light 1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1">
        <Card
          extra="!flex-row flex-grow items-center rounded-[6px] relative"
          style={{ height: "200px" }}
        >
          <div className="h-50 ml-4 flex w-auto flex-col">
            <h4 className="text-xl font-bold text-blue-1000 dark:text-white">
              Welcome John! 🎉
            </h4>
            <p className="mb-6 font-dm text-sm font-medium text-gray-600">
              Your journey to smarter fleet management <br /> starts here!
            </p>
            <button className="linear rounded-[20px] bg-gray-1000 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-blue-1000 dark:hover:bg-brand-300 dark:active:opacity-90 md-max:w-32">
              View Details
            </button>
          </div>
          <div className="absolute right-14 ml-[18px] flex h-[90px] w-auto flex-row items-center md-max:right-3 md-max:w-35p">
            <img src={userBanner} alt="" />
          </div>
        </Card>
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2">
          <TotalSpent />
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
          </Slider>
        </div>
      </div>

      {/* ola map */}

      <div className="mt-3 grid grid-cols-1">
      <OlaMap />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
