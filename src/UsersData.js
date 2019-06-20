import React from 'react';

import './UsersData.css';


export default class usersDataDisplay extends React.Component{
	 constructor(props) {
    super(props);
  }
	
	
	getUserData(rating, comments, code) {
		let usersData = {
			"comments": this.state.comments,
			"rating": this.state.rating,
			"code":this.state.code
		}
		console.log(usersData)
		fetch(`http://localhost:8000//usersData/:userData_id`, {
				method: 'GET',
				body: JSON.stringify(usersData),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		
		 .then(res => {
            if (!res.ok) {
            // get the error message from the response,
            return res.json().then(error => {
				console.log(res)
                // then throw it
                throw error
            })
            }
            return res.json()
        })
			.then(usersData => () =>  {
		//	this.props.handleDisplayUsersData(rating, comments, code)
			})
			.catch(err => {
				console.log(err);
			})
	}

  render() {



	return (
	<div className="userIntreaction">
		<h2>Comments : {this.props.comments} </h2>
			<h2>Rating  {this.props.rating} </h2>
	</div>
		)

}

}