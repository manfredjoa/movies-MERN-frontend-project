import api from "./apiConfig";

export const getMovies = async () => {
  try {
    const response = await api.get("/movies");
    return response.data;
  } catch (error) {
    console.log("Error: Getting movies.", error);
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await api.post("/movies/add", movieData);
    return response.data;
  } catch (error) {
    console.log("Error: Creating movie.", error);
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const response = await api.put(`/movies/update/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.log("Error: Updating movie.", error);
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await api.delete(`/movies/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: Deleting movie.", error);
  }
};
