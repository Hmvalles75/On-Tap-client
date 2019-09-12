import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import RestCard from './components/RestCard'
import Footer from './components/Footer'
import { restaurants } from './components/dummystore'
import './app.css'
class App extends React.Component {

  state = {
    restaurants: [],
    view: null   
  }

  componentDidMount() {
    setTimeout(() => {this.setState({restaurants:restaurants})}, 500) 
  }
//handleSelection = (e) => {
//  if(this.state.restaurant.name === e.target.value) {
       
  //    } 
 //   }
handleChange = (e) => {
    this.setState({
      view: e.target.value
    })
}


render() {
    console.log(this.state.restaurants);
    const view = this.state.view && this.state.restaurants.find(
      restaurant => restaurant.name === this.state.view
    )

const loading = !this.state.restaurants.length && <p>Loading...</p>

  return (
    <div>
        <NavBar />
        <main>
        <Route exact path='/' component={LandingPage} />
          {loading || (
            <form>
            <label>Select location:</label>
            <select name='restaurant'
                    onChange={this.handleChange}>
                <option value=''></option>
                {this.state.restaurants.map(
                  restaurant => <option key={restaurant.id}>{restaurant.name}</option>  
                )}
            
            </select>
        </form>
          )}
          
            {view && (<RestCard name={view.name}
                                 address={view.address}
                                 telephone={view.telephone}
                                 hours={view.hours}
                                 beers={view.beers}
            />)}
        </main>
      <Footer />
      </div>
  );
}
}

export default App
