import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const getPlanetDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://swapi.dev/api/planets/${id}/`
        );
        setPlanet(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPlanetDetails();
  }, [id]);

  if (!planet) {
    return <Loading />;
  }

  // Constructing the image URL using the index + 1
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${
    parseInt(id) + 1
  }.jpg`;

  return (
    <motion.div
      animate={{ x: [0, 100, 0], y: [600, 290, 0] }}
      transition={{ ease: "easeOut", duration: 5 }}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.29}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 h-[90vh] bg-black flex items-center mt-12 mx-auto px-4 py-8 rounded-md"
    >
      <motion.img
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.9}
        className="w-3/4 md:w-7/12 h-3/4 object-contain rounded-full border-none"
        src={imageUrl} // Using the constructed image URL
        alt="Planet"
      />
      <motion.div
        whileTap={{ scale: 0.95 }} // Scale on tap
        initial={{ scale: 0.8, opacity: 9 }} // Initial scale and opacity
        animate={{ scale: 200, opacity: 1 }} // Animation to scale and fade in
        exit={{ scale: 0.9, opacity: 0 }} // Animation to scale and fade out
        transition={{ duration: 0.9 }} // Transition duration
        // initial={{ opacity: 0 }}

        className="pl-6 text-yellow-100"
      >
        <h1 className="text-2xl">{planet.name}</h1>
        <h2 className="my-5">Climate: {planet.climate}</h2>
        <h2 className="mb-3">Terrain: {planet.terrain}</h2>
        <h3 className="mb-3">Population: {planet.population}</h3>
        <h3 className="mb-3">Rotation Period: {planet.rotation_period}</h3>
        <h3 className="mb-3">Surface Water: {planet.surface_water}</h3>{" "}
        {/* Render other details of the planet */}
      </motion.div>
    </motion.div>
  );
};

export default Details;
