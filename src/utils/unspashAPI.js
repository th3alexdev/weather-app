const API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH;

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

    if(coords) {
      let lat = coords.lat;
      let lon = coords.log;
      url = `https://api.unsplash.com/photos/random/?client_id=${appid}&count=1&collections=flag,building,sky,bridge,train,subway,capital,urban,high-rise,architecture,town,metropolis,office-buildings,metropolis,condo,housing,apartments&latitude=${ lat }&longitude=${ lon }`
      
    } else {
      url = `https://api.unsplash.com/photos/random/?client_id=${appid}&query=${city}&count=1&collections=flag,building,sky,bridge,train,subway,capital,urban,high-rise,architecture,town,metropolis,office-buildings,metropolis,condo,housing,apartments`

    }
    
    try {
    
    let response = await fetch(url, options)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error request HTTP");
          }
        }) 
        .catch((error) => {
          console.error(error);
        });
    
        let data = await response[0].urls.small

        return data

    } catch(error) {
      console.error('There was an error fetching the data:', error)
    }
  }
  
  export default getImage;


  