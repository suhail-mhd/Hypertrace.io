import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckTable from "./components/CheckTable";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import ReportPieChart from "./components/ReportPieChart";
import ReportTile from "./components/ReportTile";
import DailyTraffic from "./components/DailyTraffic";
import PieChartCard from "./components/PieChartCard";
import { Tabs, Tab } from "./components/ReportTabs";
import DeviceDropdown from "./components/DeviceDropdown";

// Importing table data and columns
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Tables = () => {
  const [selectedReport, setSelectedReport] = useState("Development Report");
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [devices, setDevices] = useState([]);

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  // Fetch device data from API
  useEffect(() => {
    const fetchFleetData = async () => {
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/currentfleetstat",
          headers: { userKey: USERKEY },
        };

        const response = await axios.request(config);
        const fleetData = response.data.fleetdata[0]; // Accessing the first fleet's data
        const deviceList = fleetData.map((device) => device.did); // Extracting did values
        setDevices(deviceList); // Updating devices state
      } catch (error) {
        console.error("Error fetching fleet data:", error);
      }
    };

    fetchFleetData();
  }, []);

  // Handle report selection change
  const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
  };

  return (
    <>
      <div className="tables-container mb-[10rem] flex">
        {/* Left Sidebar for Device List */}
        <div className="w-1/6 p-4">
          <DeviceDropdown
            devices={devices}
            selectedDevices={selectedDevices}
            setSelectedDevices={setSelectedDevices}
          />
        </div>

        {/* Main content area */}
        <div className="w-3/4">
          {/* Dropdown to select report type */}
          <div className="top-bar flex justify-center p-4">
            <label htmlFor="report-select" className="mr-3 dark:text-white">
              Select Report:
            </label>
            <select
              id="report-select"
              className="bg-transparent border p-2 focus:outline-none"
              value={selectedReport}
              onChange={handleReportChange}
            >
              <option value="Development Report">Development Report</option>
              <option value="Check Report">Check Report</option>
              <option value="Columns Report">Columns Report</option>
              <option value="Complex Report">Complex Report</option>
            </select>
          </div>

          

          {/* Conditionally render components based on the selected report */}
          <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
            {selectedReport === "Development Report" && (
              <>
                <div className="mt-b grid h-full grid-cols-1 gap-5 md:grid-cols-2">
                  <PieChartCard />
                  <ReportTile />
                </div>
                <DevelopmentTable
                  columnsData={columnsDataDevelopment}
                  tableData={tableDataDevelopment}
                />
              </>
            )}
            {selectedReport === "Check Report" && (
              <>
                <ReportTile />
                <CheckTable
                  columnsData={columnsDataCheck}
                  tableData={tableDataCheck}
                />
              </>
            )}
            {selectedReport === "Columns Report" && (
              <>
                <div className="mb-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
                  <ReportTile />
                  <DailyTraffic />
                </div>
                <ColumnsTable
                  columnsData={columnsDataColumns}
                  tableData={tableDataColumns}
                />
              </>
            )}
            {selectedReport === "Complex Report" && (
              <>
                <div className="mb-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
                  <PieChartCard />
                  <ReportTile />
                </div>
                <ComplexTable
                  columnsData={columnsDataComplex}
                  tableData={tableDataComplex}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
