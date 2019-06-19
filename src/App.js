import React from 'react';
import './App.css';
import WineList from './WineList';
import Header from './Header';
import Popular from './Popular';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			wineData: []	
	}
	}
	searchTermUpdate(term) {
		this.setState({
			searchTerm: term
		})
	}
	
	 handleSubmit(e) {
        e.preventDefault();
        this.getWineData(this.state.searchTerm);
    }

	
	getWineData(searchTerm) {
		const url = `http://localhost:8000/wine-api-data/${searchTerm}`
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
			  <Router>
			<main className ='App'>
			<Header
			/>
				<div className="query">
			<div className="dropdown">
						<button className="dropbtn">=</button>
						<div className="dropdown-content">
							<a href="#">Home</a>
							<a href="#">Search</a>
							<a href="#">Popular</a>
						</div>
					</div>
			<img className="glass" src="https://img1.goodfon.com/original/1920x1080/6/e8/wine-glass-wine-wood.jpg">
			</img>
			<div className="text-box">
				<h1>Explore the world of wine</h1>
				<h2>Do you like Red one or White? Or maybe you're actualy a Rose soul. Type in the wine you love and share your thoughts about it</h2>
			  <div className="container">
                <form
                    className="input_form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <div className="search-section top">
                        <input
						className="search__input"
						placeholder="Type in Wine Name"
                          type="text" 
                            onChange={e=> this.searchTermUpdate(e.target.value)}
                        />
                    </div>
                        
                	<div className="buttons-coll">
					<button type="submit" className="custom-btn btn-4"><span>Search </span></button></div>
          </form>
			</div>
		</div>
            </div>
 		<Route
           exact path='/'
            render={() =>
              <WineList
          		wineDataDisplay={this.state.wineData}
              />}
			
        />
					<Popular
		/>
		 
			</main>
</Router>
		);
	}
}
export default App;