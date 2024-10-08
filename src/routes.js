import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Reports",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "Reports",
    component: <DataTables />,
  },
  {
    name: "Device Details",
    layout: "/admin",
    path: "device-details",
    icon: <TbListDetails className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },

  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;
