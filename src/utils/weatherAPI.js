const API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHERMAP; // Developer API OpenWeatherMap Key

const getData = async(city, coords = null) => { // Función para obtener las coordenadas de una ciudad
  // a partir de su nombre.
  let appid = API_KEY;

  let url;
  // URL para la petición de coordenadas en la API 

  if(coords) {
    console.log(coords)
    let lat = coords.lat;
    let lon = coords.log;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ appid }&lang=en`;
    
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ appid }&lang=en`;

  }

  try {
    let response = await fetch(url)
    let data = await response.json()
    
    console.warn('apicall')

    return data;
  } catch(error) {
    console.error('There was an error', error)

  }

};

const getForecast = async(city, coords = null) => { // Función para obtener las coordenadas de una ciudad
  // a partir de su nombre.
  let appid = API_KEY;
  let url;

  // URL para la petición de coordenadas en la API 
  if(coords) {
    console.log(coords)
    let lat = coords.lat;
    let lon = coords.log;
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${ lat }&lon=${ lon }&appid=${ appid }&lang=en&cnt=8`;

  } else {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&cnt=8`;

  }

  try {
    let response = await fetch(url)
    let data = await response.json()
    
    return data;
  } catch(error) {
    console.error('There was an error', error)

  }

};

export { getData, getForecast } 