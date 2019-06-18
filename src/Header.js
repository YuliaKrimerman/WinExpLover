    
import React from 'react';
import './Header.css'
class Header extends React.Component {
	
	render() {
 return (
	<div>
		<header>
	 	<img className="logo"
	 		 src="https://i.ibb.co/M8kbcbp/cvxcvcxv.png" >
	  </img>
	 </header>
	 <div className="start">
		<nav>
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#search">Search</a></li>
				<li><a href="#popular">Popular Wines</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
		<h3>Share and Explore your</h3>
		<h4>Love of Wine</h4>
		<button type="button" role="button" id="button" className="fill">Start</button>
	</div>
	  </div>
	 )
}
}
	export default Header;