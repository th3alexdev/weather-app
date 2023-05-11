import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import currentLocationIcon from "../../../src/assets/icons/current-location.svg";

function CurrentLocationButton({ getPosition, setPosition, toast, showNotification, setShowNotification }) {

  const notify = (promise) => {   // Function to display a notification using the toast library
    setShowNotification(true); // Show the notification
    toast.promise( // Defines the toast options
      promise, 
      {
        pending: 'Getting your location...',
        success: 'Location was retrieved successfully!',
        error: 'An error occurred while getting your location.'
      },
      {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => setShowNotification(false)
      }
    )
  };

  const currentLocationHandler = async () => {   // Handler function for the current location button click event

    if(!showNotification) { // Display the notification and get the user's current position
      notify(
        getPosition()
        .then((coords) => {
          setPosition(coords); // Set the position with the retrieved coordinates
          return coords;
        })
        .catch((error) => {
          // console.log(error);
          throw error;
        })
        );
    }
  }

  return (
    <button 
      className="btn btn-header btn-header--large"
      title="Current Location"
      onClick={() => currentLocationHandler()}
      aria-label="Current Location"
    >
      <img src={ currentLocationIcon }
       alt="Icon indicating the user's current location"
       className="icon"
      /> Current Location
    </button>
  )
}

export default CurrentLocationButton
