import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import './styles/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userData: [],
      count: 0,
      selectedUser: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser(this.state.username)
  }

  getUser(username) {
    axios.get(`https://api.github.com/search/users?q=${username}`)
    .then(response => {
      this.setState({userData: response.data.items, count: response.data.total_count});
      //console.log(response)
      //console.log(this.state.userData)
      if (response.message === 'Not Found') {
        let error = 'There was an error'
        console.log(error)
      }
      return response
    })
    .catch((error) => {
    })
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div className='App-body'>
        <UserList userData={this.state.userData} count={this.state.count} username={this.state.username} />
        </div>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
