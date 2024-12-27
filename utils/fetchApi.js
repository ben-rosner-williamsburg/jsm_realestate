import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      params: {
        externalID: '4937770'
      },
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "9f974cbcd6mshf30b729e33c7d1ap120532jsnbfef49b6a2fc",
      },
      
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error(
      "Failed to fetch data from the API. Please try again later."
    );
  }
};
