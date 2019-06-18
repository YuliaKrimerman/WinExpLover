import React from 'react';
import './WineList.css'

import WineItem from './WineItem';

class WineList extends React.Component {
    render() {
        const wines = this.props.wineDataDisplay
		    .map( (wine, i ) => <WineItem { ...wine } key={i}/>)
        return (
				 <div>
			<img id="glass" src="https://img1.goodfon.com/original/1920x1080/6/e8/wine-glass-wine-wood.jpg">
				 </img>
		<div className="text-box">
            <div id="results-list">
                {wines}
            </div>
				 </div>
				 
				 </div>
        )
    }
}

export default WineList;