import React from 'react';

import './WineItem.css';
import UserDataContext from './userDataContext';
import UsersData from './UsersData';


class WineItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: '',
			comments: '',
			code: ''
		}
	}
	
	
	searchTermUpdate(comments) {
		this.setState({
			comments: comments
		})
		
	}

	changeRating(rating) {
		this.setState({
			rating: rating

		})
	}
	changeCode(code) {
		this.setState({
			code: code

		})
	console.log(code)
	}
	

	handleSubmit(e) {
		e.preventDefault();
		this.postUserData(this.state.rating.comments); //save user rating all the elemnts of the state
	}
	



	postUserData(rating, comments,code) {
		let usersData = {
			"comments": this.state.comments,
			"rating": this.state.rating,
			"code":this.props.code
		}
		console.log(usersData)
		fetch(`http://localhost:8000/usersData`, {
				method: 'POST',
				body: JSON.stringify(usersData),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		
		 .then(res => {
            if (!res.ok) {
            // get the error message from the response,
            return res.json().then(error => {
                // then throw it
                throw error
            })
            }
		
            return res.json()
        })
	}


	render() {
		
		return ( 
			  
			<div className = "list" >
			<ul id = "list" >
			<li>
			<img id = "bottle"
			src = {this.props.image}
			alt = {this.props.image}
			/> <
			/li> <li>
			Name: {this.props.name} <
			/li> <
			li > Region: {this.props.region} <
			/li> <
			li > Type: {this.props.wine_type} < br >
			</br></li>
			<h5> {this.props.code} </h5>
			
			<li> Rate this wine: 
			<form className = "formSubmit"
			onSubmit = {e => this.handleSubmit(e)} >  
			<h5 onSubmit = {e => this.changeCode(e.target.value)}> {this.props.code}</h5>
			<fieldset className = "rating" >
			<input type = "radio"
			rating = "5"
			onChange = {e => this.changeRating(e.target.value)}
			id = "star5"
			name = "rating"
			value = "5" / > < label className = "full"
			htmlFor = "star5" > < /label>

			<input type = "radio"
			rating = "4.5"
			onChange = {e => this.changeRating(e.target.value)}
			id = "star4half"
			name = "rating"
			value = "4.5" / > < label className = "half"
			htmlFor = "star4half" > < /label> 

			<input type = "radio"
			rating = "4" onChange = {e => this.changeRating(e.target.value)}
			id = "star4"
			name = "rating"
			value = "4" / > < label className = "full"
			htmlFor = "star4" > < /label> 

			<input type = "radio"
			rating = "3.5" onChange = {e => this.changeRating(e.target.value)}
			id = "star3half"
			name = "rating"
			value = "3.5" / > < label className = "half"
			htmlFor = "star3half" > < /label>

			<input type = "radio"
			rating = "3" onChange = {e => this.changeRating(e.target.value)}
			id = "star3"
			name = "rating"
			value = "3" / > < label className = "full"
			htmlFor = "star3" > < /label> 

			<input type = "radio"
			rating = "2.5" onChange = {e => this.changeRating(e.target.value)}
			id = "star2half"
			name = "rating"
			value = "2.5" / > < label className = "half"
			htmlFor = "star2half" > < /label>
			
			<input type = "radio"
			rating = "2" onChange = {e => this.changeRating(e.target.value)}
			id = "star2"
			name = "rating"
			value = "2" / > < label className = "full"
			htmlFor = "star2" > < /label>

			<input type = "radio"
			rating = "1.5" onChange = {e => this.changeRating(e.target.value)}
			id = "star1half"
			name = "rating"
			value = "1.5" / > < label className = "half"
			htmlFor = "star1half"
			title = "Meh - 1.5 stars" > < /label> 

			<input type = "radio"
			rating = "1.5" onChange = {e => this.changeRating(e.target.value)}
			id = "star1"
			name = "rating"
			value = "1" / > < label className = "full"
			htmlFor = "star1"
			title = "Sucks big time - 1 star" > < /label> 

			<input type = "radio"
			rating = "0.5" onChange = {e => this.changeRating(e.target.value)}
			id = "starhalf"
			name = "rating"
			value = "0.5" / > < label className = "half"
			htmlFor = "starhalf"
			title = "Sucks big time - 0.5 stars" > < /label> 
			</fieldset>

			<div className = "container" >
			<input type = "text"
			onChange = {e => this.searchTermUpdate(e.target.value)}
			placeholder = "Comment" >
			</input> <
			div className = "buttons-coll" >
			<button type = "submit"
			className = "custom-btn btn-4" > < span > Post < /span></button > < /div> <
			/div> </form>
			</li>
		</ul>
< UsersData usersDataDisplay={this.state.rating.comments}
/>
	</div>
		)
	}
}

export default WineItem;