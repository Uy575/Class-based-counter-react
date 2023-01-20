import { Component } from 'react';
import React from 'react';
import './App.css';
import Increment from './components/increment.component';
import Decrement from './components/decrement.component';

class App extends Component {
      constructor(){
        super();

        this.state = {
          counter: 0,
        }
      }


  render(){

    return (
      <div className="App">
      <h1>{this.state.counter}</h1>
   
       {/* ... Increment component coming from increment class ...  */}
       <Increment handle = {()=>{
                this.setState({
                  counter : this.state.counter + 1
                })
    
          }}/>

    {/* ... Decrement component coming from Decrement class ...  */}
       <Decrement dechandle = {()=>{

          if(this.state.counter!==0)
          {
           this.setState({
            counter : this.state.counter-1
                 });
            }

               }}/>

    </div>
  );
}
}

export default App;