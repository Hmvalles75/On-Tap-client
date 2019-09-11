import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import RestCard from './components/RestCard'
import Footer from './components/Footer'
import restaurant from './components/dummystore'
import './app.css'
class App extends React.Component {

  state = {
    restaurant,
    view: false   
}

handleChange = (e) => {
    this.setState({
      restaurant: {
        name: restaurant[0].name,
        address: restaurant[0].address,
        telephone: restaurant[0].telephone
      },
      view: true
    })
}


render() {
    console.log(this.state.restaurant[0]);
    const view = this.state.view === false;

  return (
    <div>
        <NavBar />
        <main>
        <Route exact path='/' component={LandingPage} />
          <form>
                <label>Select location:</label>
                <select name='restaurant'
                        onChange={this.handleChange}>
                    <option value=''></option>
                    <option value={restaurant[0]}>The Back Abbey</option>
                    <option value='Casa Moreno'>Casa Moreno</option>
                    <option value={restaurant[1]}>Eureka!</option>
                    <option value='Heroes and Legends'>Heroes and Legends</option>
                    <option value='Pizza N Such'>Pizza 'n Such</option>
                    <option value='Tutti Mangia'>Tutti Mangia</option>
                    <option value='Union On Yale'>Union on Yale</option>
                    <option value='The Whisper House'>The Whisper House</option>
                    <option value='The Quarter'>The Quarter Creole Cuisine</option>
                    <option value='Viva Madrid'>Viva Madrid</option>
                    <option value='Dr Grubbs'>Dr. Grubbs</option>
                    <option value='Nunos Bistro'>Nuno's Bistro</option>
                    <option value='The Meat Cellar'>The Meat Cellar</option>
                </select>
            </form>
            {!view && (<RestCard name={this.state.restaurant.name}
                                 address={this.state.restaurant.address}
                                 telephone={this.state.restaurant.telephone}
            />)}
        </main>
      <Footer />
      </div>
  );
}
}

export default App
