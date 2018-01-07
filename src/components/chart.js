import React ,{Component} from 'react';
import { Sparklines,SparklinesLine ,SparklinesReferenceLine} from 'react-sparklines';

export default (props)=>{
	return(
		<div>
			<Sparklines data={props.data}>
				<SparklinesLine color="blue" />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
		</div>
	)
}