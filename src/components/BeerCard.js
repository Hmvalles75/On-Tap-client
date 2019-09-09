import React from 'react';
import './beercard.css';

function BeerCard() {

    return (
        <div className='beercard'>
            <h2>Avec Les Bons Voeux</h2>
            <p>FROM: Brasserie Dupont</p>
            <hr width="90%" aligh="center" />
            <p>STYLE: Beligian Saison</p>
            <hr width="90%" aligh="center" />
            <p>ABV: 9.5%</p>
            <hr width="90%" aligh="center" />
            <p>COUNTRY OF ORIGIN: Belgium</p>
        </div> 
    )
}
export default BeerCard;
