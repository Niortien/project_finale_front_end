import React, { createContext, useContext, useState } from 'react';

const VehiculeContext = createContext();

export const useVehiculeContext = () => useContext(VehiculeContext);

export const VehiculeProvider = ({ children }) => {
  const [vehiculeData, setVehiculeData] = useState([]);

  const ajouterVehicule = (nouveauVehicule) => {
    setVehiculeData([...vehiculeData, nouveauVehicule]);
  };

  return (
    <VehiculeContext.Provider value={{ vehiculeData, ajouterVehicule }}>
      {children}
    </VehiculeContext.Provider>
  );
};
