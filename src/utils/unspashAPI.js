const API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH;

const getImage = async (cityname) =>  {
  
    const appid = ACCESS_KEY
    const options = {
      method: "GET",
      headers: {
        'X-Ratelimit-Limit': 10000,
        'X-Ratelimit-Remaining': 999
      }
    };
    
    try {
      
    const url = `https://api.unsplash.com/photos/random/?client_id=${appid}&query=${cityName}&count=1&collections=flag,building,sky,bridge,train,subway,capital,urban,high-rise,architecture,town,metropolis,office-buildings,metropolis,condo,housing,apartments`
    
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
    
        let data = await response

        return data 

    } catch(error) {
      console.error('There was an error fetching the data:', error)
    }
      
  }
  
  export default getImage;


  