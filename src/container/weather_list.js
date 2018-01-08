import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines,SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
	renderWeather(cityData){
		const temp=cityData.list.map(weather=>weather.main.temp);
		const humidity=cityData.list.map(weather=>weather.main.humidity);
		const pressure=cityData.list.map(weather=>weather.main.pressure);
		const {lat}=cityData.city.coord;
		const lng=cityData.city.coord.lon
		const center={lat,lng}
		return(
			<tr key={cityData.city.name}>
				<td className="gooleMap" >
					<GoogleMap center={center}/>
				</td>
				<td>
					<Chart data={temp}/>
				</td>
				<td>
					<Chart data={humidity}/>
				</td>
				<td>
					<Chart data={pressure}/>
				</td>
			</tr>
		)
	}
	render(){
		return (
			<div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humididy</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps({weather}){
	console.log(weather)
	return {weather}
}

export default connect(mapStateToProps)(WeatherList)
