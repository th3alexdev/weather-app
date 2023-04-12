import { getCoords, getWeather } from "./weatherAPI";

const handleInput = async( cityName ) => { // Función que maneja la entrada
    // del usuario
try {
let coords, data;

coords = await getCoords(cityName); // Se obtienen las coordenadas
data = await getWeather(coords); // Se obtiene la información del clima usando las coordenadas.

console.log(data)

} catch(error) {
console.error('There was an error handling the input', error);
}

}

/* test */
//   let cityName = "London";
//   handleInput( cityName )

export default handleInput;

