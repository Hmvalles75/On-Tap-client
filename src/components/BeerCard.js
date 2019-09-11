import React from 'react';
import './beercard.css';

class BeerCard extends React.Component {

    render() {
     

        return (
        <div className='beercard'>
            <h2>Avec Les Bons Voeux</h2>
            <p>Brewery: Brasserie Dupont</p>
            <hr width="90%" aligh="center" />
            <p>Style: Beligian Saison</p>
            <hr width="90%" aligh="center" />
            <p>ABV: 9.5%</p>
            <hr width="90%" aligh="center" />
            <p>Country of Origin: Belgium</p>
        </div> 
    )
}
}
export default BeerCard;
