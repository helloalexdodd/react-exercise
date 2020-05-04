import { WEATHER_API_KEY, GEO_API_KEY } from '../constants';

export const getData = (url) => fetch(url).then((res) => res.json());

export const WEATHER_API_URL = (lat, lng, units) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=${units}`

export const GEO_API_URL = (userInput) => `http://www.mapquestapi.com/geocoding/v1/address?key=${GEO_API_KEY}&location=${userInput}}`;
