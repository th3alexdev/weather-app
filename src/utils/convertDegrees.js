
const convertTo = (deg, type) => {
    let result;

    if(type == "celsius") {
        // Convert from Kelvin to Celsius
        result = (deg - 273.15);
    
    } else { 
        // Convert from Kelvin to Fahrenheit
        result = (deg - 273.15) * 9/5 + 32;

    }
    return Math.round(result);
}

export default convertTo 