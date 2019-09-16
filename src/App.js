import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import RestCard from './components/RestCard'
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
    this.props.history.push(`/restaurant/${e.target.value}`)
    this.setState({
      view: e.target.value
    }) 
} 




render() {
  console.log(this.props)
    console.log(this.state.restaurants);
    const view = this.state.view && this.state.restaurants.find(
      restaurant => restaurant.id === Number(this.state.view)
    )

const loading = !this.state.restaurants.length && <p>Loading...</p>

  return (
    <div className='body'>
        <NavBar />
        <main>
        <Route exact path='/' component={LandingPage} />
          {loading || (
            <form>
            <div className='menu'>
            <select name='restaurant'
                    onChange={this.handleChange}>
                  
                <option value=''>Please select a bar..</option>
                {this.state.restaurants.map(
                  restaurant => <option value={restaurant.id} key={restaurant.id}>{restaurant.name}</option>)}
            </select>
            </div>
        </form>
          )}
          
            {view && (<RestCard name={view.name}
                                 address={view.address}
                                 telephone={view.telephone}
                                 hours={view.hours}
                                 beers={view.beers}
            />)}
        </main>
      </div>
  );
}
}

export default withRouter(App)
