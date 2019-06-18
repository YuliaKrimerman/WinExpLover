import React from 'react';
import './WineList.css'

import WineItem from './WineItem';

class WineList extends React.Component {
    render() {
        const wines = this.props.wineDataDisplay
		    .map( (wine, i ) => <WineItem { ...wine } key={i}/>)
        return (
				 <div>
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
				 <div id="wrapper">
				 	<div className="scrollbar" id="style-4">
				<div className="force-overflow">
			</div>
            <div id="results-list">
                {wines}
            </div>
				 </div>
				 </div>
				 </div>
				 </div>
        )
    }
}

export default WineList;