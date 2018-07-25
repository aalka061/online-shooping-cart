import React, { Component } from 'react';
import Router from '../routes/Router'
import {NavLink} from 'react-router-dom'


const Navigation = () => ( <nav>
    <ul>
      <li> <NavLink to='/'>Home</NavLink></li>
      <li> <NavLink to='/cart'>Cart</NavLink> </li>

    </ul>
   </nav>
)

class App extends Component {
  render() {
    return (
      <div className="container">
         <Navigation/>
         <Router/>
      </div>


    );
  }
}

export default App;
