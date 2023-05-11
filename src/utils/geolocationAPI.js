
/* This function retrieves the user's current position using the Geolocation API */
const getPosition = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 4000,
        maximumAge: 0
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => { // Retrieve the latitude and longitude coordinates from the position object

          const userCoords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          resolve(userCoords); // Resolve the promise with the user's coordinates
        },
        (error) => {
          reject(error); // Reject the promise with the error if geolocation retrieval fails
        },
        options  // Pass the options object to the getCurrentPosition method
      );
    });
  };


export default getPosition;



