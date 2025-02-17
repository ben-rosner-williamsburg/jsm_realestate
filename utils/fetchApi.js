import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


let cache = {};

export const fetchApi = async (url) => {
  if (cache[url]) {
    console.log("Returning cached response");
    return cache[url];
  }

  console.log("Fetching URL:", url); // Debugging log

  try {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "9f974cbcd6mshf30b729e33c7d1ap120532jsnbfef49b6a2fc",
      },
    });
    cache[url] = data;
    setTimeout(() => delete cache[url], 60000);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.response?.data || error.message);
    throw new Error("Failed to fetch data from the API. Please try again later.");
  }
};
