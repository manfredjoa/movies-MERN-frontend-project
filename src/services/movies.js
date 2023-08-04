import api from "./apiConfig";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error) {
    console.log("Error: Getting movies.", error);
  }
};
