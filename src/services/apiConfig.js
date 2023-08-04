import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://movie-api-alan-e5f3163d8fcc.herokuapp.com/api/",
  development: "https://movie-api-alan-e5f3163d8fcc.herokuapp.com/api/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
