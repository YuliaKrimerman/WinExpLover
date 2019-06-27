import React from 'react';
import './App.css';
import Header from './Header';
import Popular from './Popular';
import WineItem from './WineItem';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			wineData: [],
			 hidediv: false
		}
	}
	
	// update the state with the input by the user
	searchTermUpdate(term) {
		this.setState({
			searchTerm: term
		})
	}
	// get the wine data from the DB
	 handleSubmit(e) {
        e.preventDefault();
        this.getWineData(this.state.searchTerm);
		
    }
	
	getWineData(searchTerm) {
		const url = `https://sheltered-cove-22859.herokuapp.com/wine-api-data/${searchTerm}`
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
					wineData: data,
					 hidediv: true
			})
		})
			.catch(err => {
				console.log(err);
			});
	}

	
	

	render() {
		   const wines = this.state.wineData
		    .map( (wine, i ) => <WineItem { ...wine } key={i}/>)
		return (
			<div>
				<main className ='App'>
					<Header 
					/>
					<div className="query" id="search" hidden = {this.state.hidediv}>
						<div className="dropdown">
							<button className="dropbtn">=</button>
								<div className="dropdown-content">
									<a href="#home">Home</a>
									<a href="#search">Search</a>
									<a href="#popular">Popular</a>
								</div>
						</div>
					<img className="glass" src="https://img1.goodfon.com/original/1920x1080/6/e8/wine-glass-wine-wood.jpg"
				 						   alt="">
					</img>
					<div className="text-box">
						<h1>Explore the world of wine</h1>
						<h2>Do you like Red one or White? Or maybe you're actualy a Rose soul. Type in the wine you love and share your thoughts about it</h2>
				 	<div className="container">
				 		<form
				 			className="input_form"
				 			onSubmit={e => this.handleSubmit(e)}>
							<div className="search-section top">
                        		<input required
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
			<div hidden = {!this.state.hidediv}>
				 <div className="dropdown">
						<button className="dropbtn">=</button>
						<div className="dropdown-content">
							<a href="#home">Home</a>
							<a href="#search">Search</a>
							<a href="#popular">Popular</a>
						</div>
					</div>
			<img className="glass" src="https://img1.goodfon.com/original/1920x1080/6/e8/wine-glass-wine-wood.jpg"
	 							  alt="">
			</img>
			<div className="text-box">
				<div id="wrapper">
				 <div className="scrollbar" id="style-4">
					<div className="force-overflow"></div>
            			<div id="results-list">
              				{wines}
            			</div>
					</div>
				</div>
			</div>
		</div>
		<div id="popular">
 				<Popular
        			/>
		</div>
	</main>
</div>
        )
	}
}
export default App;