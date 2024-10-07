import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth/index"
import VehicleDetails from "views/admin/vehicleDetails/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/vehicleDetails" element={<VehicleDetails />} />
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
