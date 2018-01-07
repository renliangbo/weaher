import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={term:''};
		this.onInputChange=this.onInputChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	};

	onInputChange(event){
		this.setState({term:event.target.value})
	};
	
	onSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
	}


	render(){
		return (
			<div>
				<form className="form-horizontal" onSubmit={this.onSubmit}>
					<div className="form-group">
						<div className="input-group">
							<input 
							className="form-control"
							type="text"
							placeholder="type a city"
							value={this.state.term}
							onChange={this.onInputChange}
							/>
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit">Button</button>
							</span>
						</div>
					</div>
				</form>
			</div>
		)
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar)