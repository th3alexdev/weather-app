const API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH;

/* Retrieves a random photo from Unsplash based on the user's current location or a search query for a city */
const getImage = async (city, coords = null) =>  { 
  
    const appid = API_KEY
    const options = {
      method: "GET",
      headers: {
        'X-Ratelimit-Limit': 10000,
        'X-Ratelimit-Remaining': 999
      }
    };

    let url;

    // If coordinates are provided, use those to search for a photo on Unsplash
    if(coords) {
      const { lat, lon } = coords;
      url = `https://api.unsplash.com/photos/random/?client_id=${appid}&count=1&collections=flag,building,sky,bridge,train,subway,capital,urban,high-rise,architecture,town,metropolis,office-buildings,metropolis,condo,housing,apartments&latitude=${ lat }&longitude=${ lon }`
      
    
    // Otherwise, use the provided city to search for a photo on Unsplash
    } else {
      url = `https://api.unsplash.com/photos/random/?client_id=${ appid }&query=${ city }&count=1&collections=flag,building,sky,bridge,train,subway,capital,urban,high-rise,architecture,town,metropolis,office-buildings,metropolis,condo,housing,apartments`

    }
    
    try {

      // Make the request to the Unsplash API using the provided URL and options
      const response = await fetch(url, options)
      let data = await response.json()
      // console.log(data)

      // If the response is not OK, throw an error with the data
      if (!response.ok) {
          const error = data;
          throw error
      }
      
      // Return the URL of the first image in the response data
      return data[0].urls.small

    } catch(error) {
      // Throw an error if there was an issue with the request
      throw error;

    }
  }
  
  export default getImage;


  