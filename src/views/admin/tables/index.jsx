import CheckTable from "./components/CheckTable";

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
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import { Tabs, Tab } from "./components/ReportTabs";
import ReportPieChart from "./components/ReportPieChart";
import ReportTile from "./components/ReportTile";
import DailyTraffic from "./components/DailyTraffic";
import PieChartCard from "./components/PieChartCard";

const Tables = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Report 1">
          <div className="py-4">
            <DevelopmentTable
              columnsData={columnsDataDevelopment}
              tableData={tableDataDevelopment}
            />
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
              <ReportPieChart />
              <ReportTile />
            </div>
          </div>
        </Tab>
        <Tab label="Report 2">
          <div className="py-4">
            <ColumnsTable
              columnsData={columnsDataColumns}
              tableData={tableDataColumns}
            />
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
              <ReportTile />
              <DailyTraffic />
            </div>
          </div>
        </Tab>
        <Tab label="Report 3">
          <div className="py-4">
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={tableDataComplex}
            />
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
              <PieChartCard />
              <ReportTile />
            </div>
          </div>
        </Tab>
      </Tabs>

      {/* <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </div> */}
    </div>
  );
};

export default Tables;
