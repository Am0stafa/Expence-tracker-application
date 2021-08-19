import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import {SearchBox} from '../src/components/search-box/search-box.components.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monister: [],
      search: ''



    }
  }
  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => (res.json()))
  .then((data) =>this.setState({monister:data})) 
  
  }
  
  handelChange = (e) => {
  this.setState({search: e.target.value})
  }
  
  
  render() {
  const {monister , search} = this.state;
  let searchvalue = monister.filter((m)=>
  m.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="App">
    <h1>Monister Project</h1>
   <SearchBox placeholder='search....'
   handelChange ={this.handelChange}
   />
    <CardList monister = {searchvalue} />
    </div>
    
  );
  
  
}

}

export default App;
