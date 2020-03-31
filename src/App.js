import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfPosts from './components/ListOfPosts';
import NewRequest_01 from './components/NewRequest_01';
import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen';
import Home1 from './components/Home1';
import NewRequestFinal_01 from './components/NewRequestFinal_01';

export default class App extends Component {

  state={
      title:[],
       post:[]
  }
  
  
  render() {
    const addNewPost=(title, post)=>{
      this.setState({title:title, post:post})
      
      console.log(this.state)
    }
    
    return (
      <div className="App">
      <div className="container">
      {/* <ListOfPosts/> */}
      {/* <Home1/> */}
      {/* <NewRequestFinal_01/> */}
      <HomeScreen/>
    {/* <NewRequest_01 addNewPost={addNewPost}/> */}

        </div>
      </div>
    )
  }
}


