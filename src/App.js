import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'
import RestCard from './components/RestCard';
import BeerCard from './components/BeerCard';
import Footer from './components/Footer'
import './app.css'
class App extends React.Component {

  state = {
    restaurant: '',
    viewRestaurant: false,
}

handleChange = (e) => {
    this.setState({
      restaurant: e.target.value,
      viewRestaurant: true
    })
}

handleSubmit = (e) => {
  e.preventDefault();
}

render() {
    console.log(this.state.restaurant);

  return (
    <div>
    <NavBar />
    <main>
      <Route exact path='/' component={LandingPage}/>
          <form onSubmit={this.handleSubmit}>
                <label>Restaurants/Bars:</label>
                <select 
                name='restaurant'
                value={this.state.restaurant}
                onChange={this.handleChange}
                >
                    <option value='select'></option>
                    <option value='back-abbey'>The Back Abbey</option>
                    <option value='casa-moreno'>Casa Moreno</option>
                    <option value='eureka'>Eureka!</option>
                    <option value='heroes-and-legends'>Heroes and Legends</option>
                    <option value='pizza-n-such'>Pizza 'n Such</option>
                    <option value='tutti-mangia'>Tutti Mangia</option>
                    <option value='union-on-yale'>Union on Yale</option>
                    <option value='the-whisper-house'>The Whisper House</option>
                    <option value='the-quarter'>The Quarter Creole Cuisine</option>
                    <option value='viva-madrid'>Viva Madrid</option>
                    <option value='dr-grubbs'>Dr. Grubbs</option>
                    <option value='nunos-bistro'>Nuno's Bistro</option>
                    <option value='the-meat-cellar'>The Meat Cellar</option>
                </select>
            </form>
          <Route path='/beers' component= {RestCard}  />
          <BeerCard />
        </main>
        <Footer />
      </div>
  );
}
}

export default App
