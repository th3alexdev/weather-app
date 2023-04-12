const API_KEY = import.meta.env.VITE_API_KEY; // Developer API OpenWeatherMap Key

const getCoords = async(cityName) => { // Función para obtener las coordenadas de una ciudad
                                       // a partir de su nombre.
    let appid = API_KEY
    
    // URL para la petición de coordenadas en la API 
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${ cityName }&limit=&appid=${ appid }`;
    
    try {
      let response = await fetch(url)
      let data = await response.json()
  
      let lat = data[0].lat
      let lon = data[0].lon
  
      let coords = {
                     "lat": lat,
                     "lon": lon
                   }
  
      return coords;
    } catch(error) {
      console.error('There was an error getting the coords', error)
      
    }
    
  
  };
  
  const getWeather = async( coords ) => { // Función para obtener el clima a partir
                                          // de las coordenas obtenidas
      let lat = coords.lat
      let lon = coords.lon

      let appid = API_KEY
    
      // URL para la petición del JSON con el clima en la API 
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ appid }`;
    
      // console.log( coords ) 

      try {
        let response = await fetch(url)
        let data = await response.json()
        
        return data
      } catch(error){
           console.error('There was an error getting the weather', error)
      }
  
  }
  
  import { getCoords, getWeather } from "./weatherAPI";
  