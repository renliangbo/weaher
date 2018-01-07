import axios from 'axios';

const  API_KEY='947017806dbae70385a5a1edc5c8d19b';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER='FETCH_WEATHER';
	
export function fetchWeather(city){
	console.log(city)
	const url=`${ROOT_URL}&q=${city},us`;
	const request=axios.get(url);
	return {
		type:FETCH_WEATHER,
		payloay:request
	}
}