import axios from "axios";
const apiUS = axios.create({
  baseURL: "https://newsapi.org",
  params: {
    apiKey:  import.meta.env.VITE_API_KEY,
    country: "us",
  },
});

export default apiUS;
