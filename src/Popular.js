import React from 'react';

import './Popular.css'

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wineData:[],
			rating:''
		}
	}
	
	changeRating(rating) {
		this.setState({
			rating: rating
		})
		this.getPopularWines(rating);
	}


	getPopularWines(rating) {
	const url = `http://localhost:8000/ratings/${rating}`
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
					wineData:data
			})
		})
			.catch(err => {
				console.log(err);
			});
		}
	
render () {
		const thisWinesData = this.state.wineData
		   return ( 	
			   <div>
			   	<div className="section">
			   	<div className="popular">
					<div className="dropdown">
						<button className="dropbtn"></button>
						<div className="dropdown-content">
							<a href="#home">Home</a>
							<a href="#search">Search</a>
							<a href="#popular">Popular</a>
						</div>
					</div>
					<h1>Popular Wines </h1>
					<div className="container">
						<input type="radio" rating="5" onClick = {e => this.changeRating(e.target.value)} value="5" id="blue"name="color" />
						<label htmlFor="blue">Highest Rating </label>
						<input type="radio" rating="1" onClick = {e => this.changeRating(e.target.value)} value="1" id="red" name="color" />
						<label htmlFor="red">Lowest rating</label>

						<div className="tile blue clearfix">
							{thisWinesData.map(function(d, idx){
         					return (
							 	<ul>
							  		<li key={idx}> <img src={d.image} alt="wine bottle" />
									</li> 
							 		<li key={idx}>Comments:"{d.comments}"
									</li>
									<li key={idx}>Name:"{d.code}"
									</li>
									<li key={idx}>Rate:{d.rating}
									</li>
								</ul>
									)})}
						</div>
						<div className="tile red clearfix">
							{thisWinesData.map(function(d, idx){
         					return (
							 	<ul>
		  							<li key={idx}> <img src={d.image} alt="wine bottle"/>
									</li> 
							 		<li key={idx}> Comments:"{d.comments}"
									</li>
									<li key={idx}>Name:"{d.code}"
									</li>
									<li key={idx}>Rate:{d.rating}
									</li>
								</ul>
								)})}
						</div>
			   		</div>
				</div>
			  </div>
			</div>
			
		)
	  }
	}
export default Popular;