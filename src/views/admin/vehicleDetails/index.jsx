import React from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";

import Widget from "components/widget/Widget";
import General from "./components/General";
import AssetDetailsTiles from "./components/AssetDetailsTiles";

const VehicleDetails = (props) => {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Vehicle details");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Vehicle details";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="flex justify-end">
              <Link to="/admin">
                <button className="linear mr-2 mt-5 rounded-[20px] bg-gray-1000 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-blue-1000 dark:hover:bg-brand-300 dark:active:opacity-90 md-max:w-32">
                  Back
                </button>
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="col-span-2">
                <General />
              </div>
              <AssetDetailsTiles />
            </div>
            <div className="mt-[115px] p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VehicleDetails;
