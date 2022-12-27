import Profile from '../src/Components/Profile'
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      show : false  
    }
  }
  toggle = () => {
    this.setState ({ show : !this.state.show})
  }
  
  render() {
    return (
      <div>
        <button onClick ={()=>this.toggle()} >show</button>
        {
        this.state.show ? (<Profile/>) : (<h1>i have nothing to show </h1>)
        }
        

      </div>
    )
  }
}

export default App

