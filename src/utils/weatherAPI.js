const API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHERMAP; // Developer API OpenWeatherMap Key

const getData = async(city, coords = null) => { // Function to retrieve weather data for
                                                // a city based on its name or coordinates
  const appid = API_KEY;

  let url;

  // If coordinates are provided, use them to fetch weather data from the API
  if(coords) {  

    const { lat, lon } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ appid }&lang=en`;
    
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ appid }&lang=en`;

  }

  try {

    // Make the request to the OpenWeatherMap API
    const response = await fetch(url)
    const data = await response.json();

    // If the response data is empty or has an error code, throw an error
    if (!data || !('cod' in data) || data.cod !== 200) {
      const error = data;
      throw error;
    } 
    
    return data;
    
  } catch(error) {
    // console.warn(error)
    return error;

  }
};

const getForecast = async(city, coords = null) => { // Function to retrieve forecast data for a city 
                                                    // based on its name or coordinates

  const appid = API_KEY;
  let url;

  // If coordinates are provided, use them to fetch forecast data from the API
  if(coords) {
    const { lat, lon } = coords;
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${ lat }&lon=${ lon }&appid=${ appid }&lang=en&cnt=8`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&cnt=8`;
  }

  // Make the request to the OpenWeatherMap API
  try {
    const response = await fetch(url)
    const data = await response.json();

    // If the response data is empty or has an error code, throw an error
    if (!data || data.cod !== "200") {
      const error = data
      throw error;
    } 

    return data;
    
  } catch(error) {
    throw error;

  }
};

export { getData, getForecast } 