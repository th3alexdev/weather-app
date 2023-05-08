
let userCoords;
const geolocation = navigator.geolocation

const getPosition = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 0
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          const userCoords = {
            lat: position.coords.latitude,
            log: position.coords.longitude,
          };
          resolve(userCoords);
        },
        (error) => {
          reject(error);
        },
        options
      );
    });
  };


export default getPosition;



