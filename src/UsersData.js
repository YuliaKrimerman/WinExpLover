import React from 'react';

import './UsersData.css';


export default class usersDataDisplay extends React.Component{
	 constructor(props) {
    super(props);
		 this.state = {
			code: ''
  }}
	
		onChangeCode(code) {
			console.log(code)
    this.setState({code: code});

			
			this.getUserDataByCode(code)
		}
		
	
	handleClick(e) {
		e.preventDefault();
		this.onChangeCode(this.props.code);
		//save user rating all the elemnts of the state
	}

	
	getUserDataByCode(code) {
		
	const url = `http://localhost:8000/usersData/${code}`
		console.log(url)
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
			console.log(data)
				this.setState({
					wineData: data
					
			})
		})
			.catch(err => {
				console.log(err);
			});
	}

	
	
	
  render() {
	
	return (
	<div className="userIntreaction">
		<form>
	<button type = "submit" onClick = {e => this.handleClick(e)}
			className = "custom-btn btn-4f"> <span> Comments </span></button > 
			<input className="dataUser" onChange = {e => this.onChangeCode(e.target.value)}>
</input>
		</form>

	</div>
		)

}

}