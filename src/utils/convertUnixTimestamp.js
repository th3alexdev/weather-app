
export const getSunriseAndSunset = (dt) => {
    let unixDate = new Date(dt * 1000);
    let options = { hour: '2-digit', minute: '2-digit', hour12: false };
    let unixTime = unixDate.toLocaleTimeString('en-US', options);
    
    // Retornamos los valores de sunrise y sunset en formato de hora legible
    return unixTime;
  }



export const convertUnixTimeStamp = (dt, timezone) => {
    const date = new Date(dt * 1000);
    date.setSeconds(date.getSeconds() + (timezone));

    let susffix = "";
    let day = Number(date.toLocaleString("en", {timeZone: "UTC", day: 'numeric'}));

    if (day > 3 && day < 21) susffix = 'th';
    else {
        switch (day % 10) {
            case 1: susffix = 'st'; break;
            case 2: susffix = 'nd'; break;
            case 3: susffix = 'rd'; break;
            default: susffix = 'th';
        }
    }

    const fulldate = {
        day,
        susffix,
        weekDay: date.toLocaleString("en", {timeZone: "UTC", weekday: 'long'}),
        month: date.toLocaleString("en", {timeZone: "UTC", month: 'short'}),
        year: date.toLocaleString("en", {timeZone: "UTC", year: 'numeric'}),
        time: date.toLocaleString("es", {timeZone: "UTC", hour: '2-digit'}),
        minutes: date.toLocaleString("en", {timeZone: "UTC", minute: '2-digit'})
    };

    return fulldate
}