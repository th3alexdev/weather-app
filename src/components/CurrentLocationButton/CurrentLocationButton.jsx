import React from 'react'

function CurrentLocationButton({ getPosition, position, setPosition  }) {

  const currentLocationHandler = () => {
      getPosition()
      .then((coords) => {
        setPosition(coords)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <button 
      className="btn btn-header btn-header--large" 
      title="Current Location"
      onClick={() => currentLocationHandler()}
    >
      <img src="../../../src/assets/icons/current-location.svg"
       alt="Current Location"
       className="icon"
      /> Current Location
    </button>
  )
}

export default CurrentLocationButton
