import React from "react";
import "../beercard/beercard.css";

class BeerCard extends React.Component {
  state = {
    beer: null
  };

  componentDidMount() {
    this.fetchBeer();
  }

  componentDidUpdate(prevProps) {
    if (this.props.beer !== prevProps.beer) {
      this.fetchBeer();
    }
  }

  fetchBeer = () => {
    let id = this.props;
    console.log(id);
    fetch(`http://localhost:8080/api/beers/${id}`)
      .then(res => res.json())
      .then(beer => {
        this.setState({
          beer
        });
      });
  };

  render() {
    const beer = this.props.beer;
    if (!beer) {
      return <p>No such beer. Please select another beer.</p>;
    }

    return (
      <div className="beercard" key={beer.id}>
        <h2>{beer.beer_name}</h2>
        <div className="beerInfo">
          <p>
            Brewery:<span> {beer.brewery}</span>{" "}
          </p>
          <hr />
          <p>
            Style:<span> {beer.style}</span>
          </p>
          <hr />
          <p>
            ABV:<span> {beer.abv}</span>
          </p>
          <hr />
          <p>
            Country:<span> {beer.country}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default BeerCard;
