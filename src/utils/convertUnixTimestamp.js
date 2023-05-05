
const getSunriseAndSunset = (unix) => {


    let unixDate = new Date(unix * 1000);

    let unixTime = unixDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
    //Retornamos los valores de sunrise y sunset en formato de hora legible
    return unixTime;
}

export default getSunriseAndSunset;