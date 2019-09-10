import React from 'react';
import BeerCard from './BeerCard';
import './restcard.css';

class RestCard extends React.Component {

    state = {
        name: 'The Back Abbey', 
        address: '128 Oberlin Ave', 
        telephone: '909-625-2642', 
        beers: ['Avec Les Bons', 'Celebrator', 'De Garre', 'Bavik', 'Chimay White', 'Delerium'],
        beer: '',
        show: false
    }

    handleClick = (e) => {
        this.setState({ 
            beer: e.target.value,
            show: true})
    }
  

    render() {
        console.log(this.state.beer)
        const show = this.state.show === false;
        const beers = this.state.beers
        const listItems = beers.map(beer => 
            <li><button 
            onClick={this.handleClick}
            value='beer'
            >{beer}</button></li>
            )
        
 
        return (
            <div className='card'>
                <h2>{this.state.name}</h2>
                <hr align='center' width='90%' />
                <h5>{this.state.address} | {this.state.telephone}</h5>
                <h4>What's On Tap:</h4>
                <ul className='list'>{listItems}</ul>
         {!show && (<BeerCard />)}
            </div>
        )
    }
}
export default RestCard;
