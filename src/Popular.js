import React from 'react';

import './Popular.css'

class Popular extends React.Component {
	   render() {
		   return (
			   <div>
<div className="section">
<div className="popular">
			   
					<div className="dropdown">
						<button className="dropbtn"></button>
						<div className="dropdown-content">
							<a href="#">Home</a>
							<a href="#">Search</a>
							<a href="#">Popular</a>
						</div>
					</div>
					<h1>Popular Wines </h1>
					<div className="container">
						<input type="radio" id="blue" name="color" />
						<label htmlFor="blue">Highest Rating</label>
						<input type="radio" id="red" name="color" />
						<label htmlFor="red">Lowest rating</label>
						<input type="radio" id="green" name="color" />
						<label htmlFor="green">Most Commented</label>
						<input type="radio" id="reset" name="color" />
						<label htmlFor="reset">All</label>
			   
			   
			   
						<div className="tile blue clearfix"><img id="bottle"src="https://data.callmewine.com/imgprodotto/gewurztraminer-colterenzio-2018_16710_zoom.jpg">
			   </img>
							<h2>GEWÜRZTRAMINER</h2>
							<p>Description: Gewurztraminer is a pink-skinned grape variety that produces some of the world's most distinctive aromatic wines. Its perfumed style is somewhat polarizing; fans adore its intense floral scent and sweet-spice flavors, while detractors lament its low acidity and lack of subtlety</p>
							<p>Rating:4.6</p>
						</div>
						<div className="tile red clearfix"><img id="bottle"
            src="https://data.callmewine.com/imgprodotto/gewurztraminer-colterenzio-2018_16710_zoom.jpg">
			   </img>
							<h2>GEWÜRZTRAMINER</h2>
							<p>Description: Gewurztraminer is a pink-skinned grape variety that produces some of the world's most distinctive aromatic wines. Its perfumed style is somewhat polarizing; fans adore its intense floral scent and sweet-spice flavors, while detractors lament its low acidity and lack of subtlety</p>
							<p>Rating:4.6</p>
						</div>
						<div className="tile blue clearfix"><img id="bottle" src="https://data.callmewine.com/imgprodotto/gewurztraminer-colterenzio-2018_16710_zoom.jpg">
			   </img>
							<h2>GEWÜRZTRAMINER</h2>
							<p >Description: Gewurztraminer is a pink-skinned grape variety that produces some of the world's most distinctive aromatic wines. Its perfumed style is somewhat polarizing; fans adore its intense floral scent and sweet-spice flavors, while detractors lament its low acidity and lack of subtlety</p>
							<p>Rating:4.6</p>
						</div>
						<div className="tile green clearfix"><img id="bottle" src="https://data.callmewine.com/imgprodotto/gewurztraminer-colterenzio-2018_16710_zoom.jpg">
			   </img>
							<h2>GEWÜRZTRAMINER</h2>
							<p>Description: Gewurztraminer is a pink-skinned grape variety that produces some of the world's most distinctive aromatic wines. Its perfumed style is somewhat polarizing; fans adore its intense floral scent and sweet-spice flavors, while detractors lament its low acidity and lack of subtlety</p>
							<p>Rating:4.6</p>
						</div>
            			<div className="tile blue clearfix"><img id="bottle"src="https://data.callmewine.com/imgprodotto/gewurztraminer-colterenzio-2018_16710_zoom.jpg">
			   </img>
							<h2>GEWÜRZTRAMINER</h2>
							<p>Description: Gewurztraminer is a pink-skinned grape variety that produces some of the world's most distinctive aromatic wines. Its perfumed style is somewhat polarizing; fans adore its intense floral scent and sweet-spice flavors, while detractors lament its low acidity and lack of subtlety</p>
							<p>Rating:4.6</p>
						</div>
					
        
					</div>
			   
			   </div>
			   </div>
			   </div>
				
		
	)
	   }
}
			   
export default Popular;