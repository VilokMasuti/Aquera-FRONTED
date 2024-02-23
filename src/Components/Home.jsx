import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "./Loading";

const Home = () => {
  const [datas, setDatas] = useState([]);

  const getPlanetData = async () => {
    try {
      const { data } = await axios.get(`https://swapi.dev/api/planets/`);
      setDatas(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlanetData();
  }, []);

  if (datas.length === 0) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 shadow-md">
      {datas.map((planet, index) => (
        <Link to={`/Deatels/${index + 1}`} key={index}>
          <motion.div
            className="mt-2 ml-2 shadow-lg duration-1000 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.9}
          >
            <img
              className="object-cover w-full h-48"
              src={`https://starwars-visualguide.com/assets/img/planets/${
                index + 1
              }.jpg`}
              alt={planet.name}
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">{planet.name}</h1>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
