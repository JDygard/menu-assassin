import { useState } from 'react';

export const useBuilding = () => {
  const [buildings, setBuildings] = useState([]);

  const addBuilding = (building) => {
    setBuildings((prevBuildings) => [...prevBuildings, building]);
  };

  const removeBuilding = (id) => {
    setBuildings((prevBuildings) => prevBuildings.filter((b) => b.id !== id));
  };

  const getBuildingById = (id) => {
    return buildings.find((b) => b.id === id);
  };

  return {
    buildings,
    addBuilding,
    removeBuilding,
    getBuildingById,
  };
};