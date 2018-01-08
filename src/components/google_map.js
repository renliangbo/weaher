import React ,{Component} from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY='AIzaSyDTTHYfrlzXd3LH5dRh6mb2lMOlRUCdFwM';

export default function (props){
	console.log(props)
	return (
			<GoogleMapReact
				defaultCenter={props.center}
				defaultZoom={11}
				bootstrapURLKeys={{
					key:API_KEY
				}}
			>
			</GoogleMapReact>
	);
}


 