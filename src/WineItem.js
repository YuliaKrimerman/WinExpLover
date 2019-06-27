import React from 'react';
import './WineItem.css';
import StarRatingComponent from 'react-star-rating-component';


class WineItem extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				wineData: [],
				rating: '',
				comments: '',
				code: '',
				image: ''
			}
		}

		//update the state for the current comment
		searchTermUpdate(comments) {
			this.setState({
				comments: comments
			})
		}

		//set state for the current rating value
		onStarClick(nextValue, prevValue, name) {
			this.setState({
				rating: nextValue
			});
		}

		// set state for the recieved code
		changeCode(code) {
			this.setState({
				code: code
			})
		}

		// submit form trigers to post the user data to the DB
		handleSubmit(e) {
			e.preventDefault();
			this.postUserData();

		}

		postUserData() {
			let usersData = {
				"comments": this.state.comments,
				"rating": this.state.rating,
				"code": this.props.code,
				"image": this.props.image
			}

			fetch(`https://sheltered-cove-22859.herokuapp.com/usersData`, {
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
				})

				.then(res => {
					const url = `https://sheltered-cove-22859.herokuapp.com/usersData/${this.props.code}`
					console.log(url)
					fetch(url)
						.then(response => {
							if (!response.ok) {
								throw new Error(response.statusText);
							}
							return response.json();
						})
						.then(data => {
							this.setState({
								wineData: data
							})

						})
						.catch(err => {
							console.log(err);
						});
				})
		}
	


	render() {
		const thisWineData = this.state.wineData
		const { rating } = this.state;
		return ( 
			<div className = "list">
				<ul id = "list" >
					<li> <img id = "bottle"
						      src = {this.props.image}
			                  alt = {this.props.image}/>
					</li> 
					<li>Name: {this.props.name} 
					</li> 
					<li> Region: {this.props.region} 
					</li> 
					<li> Type: {this.props.wine_type}
					</li>
					<li> Rate this wine: 
						<form className = "formSubmit"
							onSubmit = {e => this.handleSubmit(e)} >  
			 				<StarRatingComponent 
          						name="rate1" 
          						starCount={5}
          						value={rating}
          						onStarClick={this.onStarClick.bind(this)}
        					/>
							<div className = "container">
								<input type = "text" required
								onChange = {e => this.searchTermUpdate(e.target.value)}
								placeholder = "Comment" >
								</input> 
							<div className = "buttons-coll" >
								<button type = "submit"
								className ="custom-btn btn-4"> <span> Post </span>
								</button> 
							</div> 
							</div> 
						</form>
					</li>
				</ul>
			<div className="comments">
				<ul>
  					<h7>Comments:</h7> {thisWineData.map(function(d, idx){
         				return (<li key={idx}>{d.comments}</li>)
       				})}
				</ul>
			</div>
		</div>
		)
	}
}


export default WineItem;