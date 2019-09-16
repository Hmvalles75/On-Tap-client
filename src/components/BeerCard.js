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
        <div className="beerInfo">
        <p>Brewery:<span> {beer.brewery}</span> </p>
        <hr />
        <p>Style:<span> {beer.style}</span></p>
        <hr/>
        <p>ABV:<span> {beer.abv}</span></p>
        <hr/>
        <p>Country:<span> {beer.country}</span></p>
        </div>
        </div>

     
}
}
export default BeerCard;
