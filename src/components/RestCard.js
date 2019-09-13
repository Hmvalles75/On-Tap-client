import React from 'react';
import BeerCard from './BeerCard';
import './restcard.css';

class RestCard extends React.Component {

    state = {
        beers: [],
        view: null
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
           view: e.target.value
        })
    }

    render() {

        //console.log(this.props.beers)
       
        
        const beers = this.props.beers
        const listItems = beers.map(beer =>
            
             <li key={beer} className='list'>
                <button className='btn'
                    value={beer}
                    onClick={this.handleClick}>
                {beer}
                </button>
            </li>
        )
        
        
 
        return (
            <div>
                <div className='card'>
                    <h2>{this.props.name}</h2>
                    <hr align='center' width='90%' />
                    <p>{this.props.address} | {this.props.telephone}</p>
                    <p>Hours: {this.props.hours}</p>
                    <hr align='center' width='90%' />
                    <h4>What's On Tap:</h4>
                    <ul className='list'>{listItems}</ul>
                </div>
                {this.state.view && (<BeerCard beer={this.state.view}/>)}
            </div>
        )
    }
}
export default RestCard;
