import React ,{Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
	renderWeather(cityData){
		return(
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
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
