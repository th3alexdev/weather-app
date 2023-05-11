const getErrorMessage = (error) => {
    // console.error(error)
    switch (error.cod) {
        case '404':
          if (error.message === "city not found") {
            return "The city you entered is not valid. Please enter a valid city name.";
          } else {
            return "The forecast for the selected city is not available at the moment. Please try again later or choose a different location.";
          }
        case '429':
          return "Too many requests per minute, please, try again later.";
        case '400':
          return "Wrong latitude or longtude";
        default:
          return "The API is having trouble processing requests right now, please try again later.";
      }
}

export default getErrorMessage;