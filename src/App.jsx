/* Import necessary dependencies */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Notification library
import 'react-toastify/dist/ReactToastify.css'; // Notification styles

import "./css/styles-prefix.css"; // Importing custom 

import {
          Form,
          Header, 
          WeatherDashboard,
          DegreeButton,
          CurrentLocationButton
        } from './index'; // Importing components

import { getData, getForecast } from './utils/weatherAPI'; // Importing functions to fetch weather data
import getImage from './utils/unspashAPI'; // Importing function to fetch background image
import getPosition from './utils/geolocationAPI'; // Importing function to get user's geolocation
import getErrorMessage from "./utils/getErrorMessage";

function App() {

  const [weather, setWeather] = useState([]); // Stores weather information
  const [forecast, setForecast] = useState([]); // Stores weather forecast data
  const [loading, setLoading] = useState(false); // Show loader while data is being fetched
  const [show, setShow] = useState(false); // Show weather information
  const [img, setImg] = useState(undefined); // Stores background image URL
  const [degreeType, setDegreeType] = useState("celsius"); // Stores the type of temperature unit
  const [position, setPosition] = useState(undefined); // Stores user's geolocation
  const [showNotification, setShowNotification] = useState(false); // State hook for displaying toast notification
  const [city, setCity] = useState("") // Setea la ciudad que ingrese el usuario

  const notify = (message) => { // Function that is used to display a notification with an error message
    setShowNotification(true);  // Show notification
    toast.error(message, { // Use toast component to display error message
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: () => setShowNotification(false) // Set showNotification state to false when the notification is closed
    });
  } 

  const getLocation = async (city, coords) => {

      try {
        if (loading) return;  // If loading, return early
    
        /* Hide any previous information and show loader */
        setShow(false); 
        setLoading(true);
    
        /* Make API calls to get weather data, image, and forecast data using Promise.all */
        const [data, res, forecastData] = await Promise.all([
          getData(city, coords).catch(error => {
            throw new Error
          }),
          getImage(city, coords).catch((error) => {
            // console.error(error);
            
            return "../src/assets/img/generic-image.jpg"; // If there is an error getting the image, 
                                                          // return a default image instead
          }),
          getForecast(city, coords)
        ]);
    
        /* Set state with received data */
        setWeather(data);
        setImg(res);
        setForecast(forecastData);
    
        /* Hide loader and show weather information */
        setLoading(false);
        setShow(true);

      } catch (error) {

        /* If there is an error, handle it and show error notification */
        // console.error(error);
    
        setShow(false);
        setLoading(false);
    
        const errorMessage = getErrorMessage(error);
    
        if (!showNotification) {
          notify(errorMessage);
        }
      }
  }

  useEffect(() => { // When the position state changes, fetch weather data for the new position
    if(position) {
      getPosition()
      .then(coords => {
        getLocation(null, coords) // Get weather data based on the new position
      }).catch(error => console.error(error))
    }
  }, [position]);
  
  return (
    <>
      <ToastContainer /> {/* Container for displaying notifications  */}
      <Header>
          {/* Form component for entering a new location */}
          <Form 
            newLocation={ getLocation }
            city={ city }
            setCity={ setCity }
          />  

          {/* Button for getting weather data based on current location */}
          <CurrentLocationButton
            toast={toast}
            getPosition={ getPosition}
            position={ position }
            setPosition={ setPosition }
            setShowNotification={ setShowNotification }
            showNotification={ showNotification }
          /> 

          {/* Button for toggling between Celsius and Fahrenheit */}
          <DegreeButton
            degreeType={ degreeType }
            setDegreeType={ setDegreeType }
          />
      </Header>      

      {/* Dashboard component for displaying weather information */}  
      <WeatherDashboard
        weather={ weather }
        forecast={ forecast }
        showData={ show }
        loadingData={ loading }
        degreeType={ degreeType }
        unsplashImg={ img }
        >
      </WeatherDashboard>
    </>
  )
}

export default App