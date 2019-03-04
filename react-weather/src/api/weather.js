import axios from "axios";
const API_BASE_URL = 'https://jr-weather-api.herokuapp.com/api/weather/';
export function fetchCurrent(city, country="au"){
   return axios
   .get(`${API_BASE_URL}/${country}/${city}`,{
        params:{weather:"current"}
    })
    .then(response =>{
        const city = response.data.data.city;
        const current = response.data.data.current;
        return {
            city: `${city.name}, ${city.country}`,
            windDirection:current.windDirection,
            humidity: current.humidity,
            windSpeed: current.windSpeed,
            temp: {
                C: current.maxCelsius, 
                F: current.maxFahrenheit,
            }
        }
    })

}

export function fetchForecast(city, country="au"){
    return axios
    .get(`${API_BASE_URL}/${country}/${city}`,{
        params:{
             weather:"forecast",
             limit:10,
        }
    })
    .then(response =>{
        const city = response.data.data.city;
        const forecast = response.data.data.forecast;
        return forecast.map((item) =>( {
            city: `${city.name}, ${city.country}`,
            minCelsius: item.minCelsius,
            maxCelsius: item.maxCelsius,
            minFahrenheit: item.minFahrenheit,
            maxFahrenheit: item.maxFahrenheit,
            time:item.time,


        }))
    })
 
 }