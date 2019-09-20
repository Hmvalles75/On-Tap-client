import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import RestCard from './components/RestCard'
import './app.css'
class App extends React.Component {

  state = {
    restaurants: [],
    error: null 
  }  

  componentDidMount() {
    fetch('http://localhost:8000/api/restaurants')
    .then(res => res.json()) 
    .then(data => {
      //console.log(data)
      this.setState({ restaurants: data })
    })}   



handleChange= (e) => {
    this.props.history.push(`/restaurants/${e.target.value}`);
    
    console.log(e.target.value)
} 

render() {

  const { restaurants } = this.state;
  const loading = !restaurants.length && <p>Loading...</p>

  return (

    <div className='body'>
        <NavBar />
        <main>
        <Route exact path='/' component={LandingPage} />
          {loading ||(       
            <form>
              <div className='menu'>
              <select name='restaurant'
                      onChange={this.handleChange}> 
                <option value=''>Please select a bar..</option>
                  {restaurants.map(
                    restaurant => <option value={restaurant.id} key={restaurant.id}>{restaurant.restaurant_name}</option>)}
              </select>
              </div>
            </form>
           )} 
        <Route exact path='/restaurants/:id' component={RestCard} />
        </main>
    </div>
    )          
  }
}

export default withRouter(App)
