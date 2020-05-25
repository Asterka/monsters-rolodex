import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [
      ],
      search_field:""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json()).then(users => this.setState({users:users}))
  }

  handleChange(e){
    this.setState({search_field:e.target.value.toLowerCase()})
  }

  render(){
  return (
    <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox placeholder={this.state.search_field} handleChange={this.handleChange}/>
      
      <CardList users={this.state.users} str={this.state.search_field}/>
    </div>
  );}

}

export default App;
