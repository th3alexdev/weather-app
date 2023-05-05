import React, { useState, useEffect } from 'react';
import "./scss/styles.scss"
import {
          Form,
          Header, 
          WeatherDashboard,
          DegreeButton,
          CurrentLocationButton
        } from './index'

import { getData, getForecast } from './utils/weatherAPI';
import getImage from './utils/unspashAPI'
import getPosition from './utils/geolocationAPI';

function App() {

  const [checking, setChecking] = useState(false)
  const [weather, setWeather] = useState([]); // Información del clima obtenida
  const [loading, setLoading] = useState(false); // Setear loader mientras carga información
  const [show, setShow] = useState(false); // Para visualizar información
  const [location, setLocation] = useState(""); // Para establecer la información

  const [img, setImg] = useState("")

  const [degreeType, setDegreeType] = useState("celsius")
  
  const [forecast, setForecast] = useState([])
  const [position, setPosition] = useState("")

  const getLocation = async (city, coords) => {
    console.warn("api call")

    setShow(false)
    setLoading(true);
    
    setLocation(city);
    
    getImage(city, coords)
    .then(res => {
      
      setImg(res)
      console.log(res)
      
    }).catch(e => {
      console.log(e)
      setImg('uwu')
    })

    getData(city, coords)
      .then(res => {
        setWeather(res)

        getForecast(city, coords)
          .then(res => {
            setForecast(res)
            setLoading(false)
            setShow(true)
            console.log(forecast)
          })
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
        setShow(false)
    })
  } 

  useEffect(() => {
    if(position) {
      getPosition()
      .then((coords) => {
        getLocation(null, coords)

      })
      .catch((error) => {
        console.log(error);
      });


    }
  }, [position]);

  return (
    <>
      <Header>
          <Form newLocation={ getLocation }/>
          <CurrentLocationButton
          getPosition={ getPosition}
            position={ position }
            setPosition={ setPosition }
          />
          <DegreeButton
            degreeType={ degreeType }
            setDegreeType={ setDegreeType }
          />
      </Header>        
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