let cache = {};

export const fetchApi = async (url) => {
  if (cache[url]) {
    console.log("Returning cached response");
    return cache[url];
  }

  try {
    const { data } = await axios.get(url, {
      params: { externalID: '4937770' },
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "9f974cbcd6mshf30b729e33c7d1ap120532jsnbfef49b6a2fc",
      },
    });
    cache[url] = data; // Store response in cache
    setTimeout(() => delete cache[url], 60000); // Cache expiration in 60 seconds
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("Failed to fetch data from the API. Please try again later.");
  }
};
