import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "components/card";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

function FleetViewTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fleetData, setFleetData] = useState([]);
  const [fleetDisplayNames, setFleetDisplayNames] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  const getFleetView = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/currentfleetstat",
      headers: { userKey: USERKEY },
    };

    axios
      .request(config)
      .then((response) => {
        setFleetData(response.data.fleetdata[0]); // set fleet data
        setFleetDisplayNames(response.data.fleetdisplaynames); // set display names for headers
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFleetView();
  }, []);

  const columnHelper = createColumnHelper();

  // Dynamically generate columns based on fleetDisplayNames
  const columns = Object.keys(fleetDisplayNames).map((key) =>
    columnHelper.accessor(key, {
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          {fleetDisplayNames[key]}
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    })
  );

  const table = useReactTable({
    data: fleetData, // use the fleet data as table data
    columns,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  return (
    <Card extra={"w-full h-full p-6"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Fleet View
        </div>
        <div className="mb-6 flex items-center justify-center">
          <div className="mr-3 flex h-full items-center rounded-full bg-lightPrimary py-2 text-navy-700 dark:bg-navy-900 dark:text-white">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search by Asset ID..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
              onChange={(e) => {
                const value = e.target.value;
                setColumnFilters([
                  {
                    id: "astid", // Assuming "asset_id" is the key for asset ID in your data
                    value: value,
                  },
                ]);
              }}
            />
          </div>
        </div>
      </header>

      {/* Adjust table container to enable horizontal scrolling based on column data */}
      <div
        className={`mt-8 ${
          columns.length > 5 ? "overflow-x-auto" : "overflow-x-hidden"
        }`}
      >
        <table className="w-full min-w-max">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                  >
                    <div className="items-center justify-between text-xs text-gray-200">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="min-w-[150px] border-white/0 py-3  pr-4"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="relative mb-4 flex items-center justify-between pt-4 text-gray-600">
          <div>
            Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
            {table.getRowCount().toLocaleString()} Rows
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded border p-1"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount().toLocaleString()}
              </strong>
            </span>
            <button
              className="rounded border p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FleetViewTable;
