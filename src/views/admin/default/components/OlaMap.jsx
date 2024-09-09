import React, { useEffect, useRef } from 'react';

const OlaMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.OlaMaps) {
      const olaMap = new window.OlaMaps.Map(mapRef.current, {
        center: { lat: 12.9715987, lng: 77.5945627 }, // Center the map to a specific location (e.g., Bangalore)
        zoom: 14,
      });

      // Example: Add a marker
      const marker = new window.OlaMaps.Marker({
        position: { lat: 12.9715987, lng: 77.5945627 },
        map: olaMap,
        title: 'Hello Bangalore!',
      });
    }
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default OlaMap;
