import React ,{Component} from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={term:''};
		this.onInputChange=this.onInputChange.bind(this)
	};

	onInputChange(event){
		this.setState({term:event.target.value})
	};
	
	onSubmit(event){
		event.preventDefault();
		console.log(33)
	}


	render(){
		let that=this;
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
} 