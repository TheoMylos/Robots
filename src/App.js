import React,{Component} from "react";
import CardList from "./CardList";
import {robots}  from './robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component  {
  constructor(){
    super()
    this.state = { 
      robots: robots,
      searchfield: ''
    }
  }

  onSearchchange = (event) => {
    
    this.setState({ searchfield: event.target.value })
}
  render() {
    const filterdRobots = this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) 
     })
    return(
  <div className="tc">
    <h1 className="f1">RoboFriends</h1>
    <SearchBox searchchange = {this.onSearchchange}/>
  <CardList robots={filterdRobots}/>
 </div> 
 );
 }
  
}
export default App;