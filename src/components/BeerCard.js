import React from 'react';
import './beercard.css';
import { beers } from './dummystore';

class BeerCard extends React.Component {

    render() {
     console.log (this.props)
     const beer = beers.find(
         b => b.name === this.props.beer
     )
     if (!beer) {
         return <p>No such beer. Please select another beer.</p>
     } 
    return <div className='beercard' key={beer.name}>
        <h2>{beer.name}</h2>
        <p>Brewery: {beer.brewery} </p>
        <hr width="90%" align="center" />
        <p>Style: {beer.style}</p>
        <hr width="90%" align="center" />
        <p>ABV: {beer.abv}</p>
        <hr width="90%" align="center" />
        <p>Country: {beer.country}</p>
        </div>

     
}
}
export default BeerCard;
