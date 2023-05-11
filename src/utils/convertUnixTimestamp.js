
// Convert the Unix timestamp to a JavaScript date object
export const getSunriseAndSunset = (dt) => {
    let unixDate = new Date(dt * 1000);

    // Define options for formatting the time
    let options = { hour: '2-digit', minute: '2-digit', hour12: false };

    // Format the Unix time to a readable time string
    let unixTime = unixDate.toLocaleTimeString('en-US', options);
    
    // Return the sunrise or sunset time in a readable format
    return unixTime;
  }


export const convertUnixTimeStamp = (dt, timezone) => {
    const date = new Date(dt * 1000);   // Convert the Unix timestamp to a JavaScript date object
    date.setSeconds(date.getSeconds() + (timezone)); 

    let susffix = "";
    let day = Number(date.toLocaleString("en", {timeZone: "UTC", day: 'numeric'}));
    
    /* Determine the correct suffix for the day (e.g., 1st, 2nd, 3rd) */
    if (day > 3 && day < 21) susffix = 'th'; 
    else {
        switch (day % 10) {
            case 1: susffix = 'st'; break;
            case 2: susffix = 'nd'; break;
            case 3: susffix = 'rd'; break;
            default: susffix = 'th';
        }
    }

    /* Construct an object with the full date and time information */
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