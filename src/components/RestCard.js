import React from 'react';
import BeerCard from './BeerCard';
import { animateScroll as scroll, scroller } from 'react-scroll'
import './restcard.css';

class RestCard extends React.Component {

    state = {
        restaurant: null,
        view: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:8000/api/restaurants/${id}`)
        .then(res => res.json())
        .then(restaurant => {
            this.setState({
                restaurant: restaurant
            })
        })
    }
    
    scrollTo() {
        scroller.scrollTo('down', {
        duration: 800,
        delay:0,
        smooth:'easeInOutQuart'
    })
    }
    handleClick = (e) => {
        e.preventDefault();
        scroll.scrollTo(500)
        this.setState({ 
           view: e.target.value
        })
    }

    render() {
        console.log(this.props)
        if (!this.state.restaurant) { return <p>Loading...</p>}
        const { restaurant } = this.state;
        const listItems = restaurant.beers.map(beer =>
            
             <li key={beer.id} className='list'>
                <button className='btn'
                    value={beer.id}
                    onClick={this.handleClick}>
                {beer.name}
                </button>
            </li>
        )
        
        
 
        return (
            <div>
                <div className='card'>
                    <div className='restHead'>
                        <h2>{restaurant.restaurant_name}</h2>
                        <hr align='center' width='90%' />
                        <div className='address'>
                        <p>{restaurant.street} | {restaurant.telephone}</p>
                        <p>Hours: {restaurant.hrs}</p>
                        <hr align='center' width='90%' />
                        </div>
                        <h4>What's On Tap:</h4>
                    </div>
                    <ul className='list'>{listItems}</ul>
                </div>
                <div id='down'>
                {this.state.view && (<BeerCard beer={this.state.view}/>)}
                </div>
            </div>
        )
    }
}
export default RestCard;
