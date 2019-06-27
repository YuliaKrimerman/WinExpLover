    
import React from 'react';
import './Header.css'


class Header extends React.Component {
	
	render() {
 		return (
			<div>
				<header id="home">
	 				<img className="logo"
	 		 			src="https://i.ibb.co/M8kbcbp/cvxcvcxv.png" 
	 					alt='background'>
	  				</img>
	 			</header>
	 			<div className="start">
					<nav>
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#search">Search</a></li>
							<li><a href="#popular">Popular Wines</a></li>
							<li><a href="mailto:juliapiterova@hotmail.com">Contact</a></li>
						</ul>
					</nav>
					<h3>Share and Explore your</h3>
					<h4>Love of Wine</h4>
			 
				</div>
	  		</div>
	 	)
	}
}
export default Header;