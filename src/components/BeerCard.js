import React from 'react';
import './beercard.css';

class BeerCard extends React.Component {

    state = {
        beer: null,
    }

    componentDidMount() {
        this.fetchBeer()
    }

    componentDidUpdate() {
        if(this.state.beer && this.props.beer === this.state.beer.id) {
        return }
        else {this.fetchBeer()}
    }
    
    fetchBeer = () => {
     let id = this.props.beer
        fetch(`http://localhost:8000/api/beers/${id}`)
        .then(res => res.json())
        .then(beer => {
            this.setState({
                beer: beer[0]
            })
        })
    }
    


    render() {
     console.log (this.props)
     const beer = this.state.beer
     if (!beer) {
         return <p>No such beer. Please select another beer.</p>
     } 
     console.log(beer);
    return <div className='beercard' key={beer.id}>
            <h2>{beer.beer_name}</h2>
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
