import React from 'react';
import { Link } from 'react-router-dom';
import './restcard.css';

class RestCard extends React.Component {

    render() {
        return (
            <div className='card'>
                <h2>The Back Abbey</h2>
                <hr align='center' width='90%' />
                <h5>128 Oberlin Ave | 909.625.2642</h5>
                <h6>What's On Tap:</h6>
                <ul className='list'>
                    <li><Link to="/beer">Avec Les Bons Voeux</Link></li>
                    <li><a href="blank.com">Bavik</a></li>
                    <li><a href="blank.com">Celebrator</a></li>
                    <li><a href="blank.com">Chimay White</a></li>
                    <li><a href="blank.com">De Garre</a></li>
                    <li><a href="blank.com">Deleriem Tremens</a></li>
                </ul>
            </div>
        )
    }
}
export default RestCard;
