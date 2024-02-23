import fetchPlanets from "./fetchplants";
import { createContext, useEffect, useState } from "react";

export const PlantsContext = createContext();

const Context = props => {
  const [plants, setPlants] = useState(null); // Change 'plant' to 'plants'

  const getPlants = async () => {
    try {
      const data = await fetchPlanets(); // Call fetchPlanets function

      setPlants(data); // Update the state with the fetched planets
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <PlantsContext.Provider value={[plants, setPlants]}>
      {" "}
      {/* Change the value to 'plants' */}
      {props.children}
    </PlantsContext.Provider>
  );
};

export default Context;
