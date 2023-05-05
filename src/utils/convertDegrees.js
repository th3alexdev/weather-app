
const convertTo = (deg, type) => {
    // console.log(deg)
    // console.log(type)

    if(type == "celsius") {
        let celsius = (deg - 273.15);
    
        return Math.round(celsius);
    
    } else { 
        let fahrenheit = (deg - 273.15) * 9/5 + 32;
    
        return Math.round(fahrenheit);

    }

}

export default convertTo 