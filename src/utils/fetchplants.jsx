import axios from "axios";

const fetchplants = async () => {
  try {
    const response = await axios.get("https://swapi.dev/api/planets/");
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error; // Re-throwing the error for handling in the calling code
  }
};

export default fetchplants;
