
let userCoords;
const geolocation = navigator.geolocation

// const getPosition = (position) => {
//     return new Promise((resolve, reject) => {
//         // navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const userCoords = {
//               lat: position.coords.latitude,
//               log: position.coords.longitude,
//             };
//             resolve(userCoords);
//           },
//           (error) => {
//             reject(error);
//           },
//           options
//         // );
//       });
// }

// const options = {
//     // enableHighAccuracy: true,
//     // timeout: 3000,
//     maximumAge: 0
// }
// const error = (error) => console.log(error, error.message)

// geolocation.getCurrentPosition(getPosition, error, options)


const getPosition = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 1000,
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



