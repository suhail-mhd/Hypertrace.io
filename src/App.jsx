import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import VehicleDetails from "views/admin/vehicleDetails/index";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth/index"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/vehicleDetails" element={<VehicleDetails />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
