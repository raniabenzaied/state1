import React from 'react' ;
import  { Component } from 'react'


export class Profile extends Component {
    constructor (Profile){
        super(Profile)
        this.state = {
            FullName : 'Rania Benzaied' ,
            Bio : 'Hey this is me' ,
            Profession : 'im a fullstack developer ' , 
            Image : {Image} ,
            timer : 0 ,
            intervall : null , 
            counter : 0 ,
        }
    }
    increment=()=>(
        this.setState({
            counter : this.state.counter + 1 ,
        }
    ))
    componentDidMount(){
        this.setState({
            intervall : setInterval (
                ()=>this.setState({timer:this.state.timer + 1}) ,1000
            )
        })
    }
  render() {
    return (
      <div>
        <h1 style={{color: "black",backgroundColor: '#c8eff9',padding: "10px",fontFamily: "Arial",textAlign:'center'}}>{this.state.FullName} </h1>
        <h2>{this.state.Bio}</h2>
        <h2>{this.state.Profession}</h2>
        <h2>{this.props.title}</h2>
        
        <h3>intervallTimer  = {this.state.timer}</h3>
        <h3>Count = {this.state.counter}</h3>
        <button
          onClick={(event) => {
            const newCount = this.state.counter + 1;
            this.setState({ counter: newCount });
          }}
        >
          increment 
        </button>
      </div>
    )
  }
}

export default Profile



