import React, { useState } from "react";

const DeviceDropdown = ({ devices, selectedDevices, setSelectedDevices }) => {
  const handleDeviceChange = (device) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices(selectedDevices.filter((d) => d !== device));
    } else {
      setSelectedDevices([...selectedDevices, device]);
    }
  };

  return (
    <div className="device-dropdown">
      <label className="block mb-2">Select Device ID:</label>
      <div className="border p-4 rounded-md max-h-40 overflow-auto">
        {devices.map((device, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedDevices.includes(device)}
              onChange={() => handleDeviceChange(device)}
            />
            <label>{device}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceDropdown;
