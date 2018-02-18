import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

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

  renderUserList() {
    if (this.state.userData.length === 0) {
      return ''
    }
    else {
      return(
        <div className='user-page'>
          <h3 className=''>Found {this.state.count} results for {this.state.username}</h3>
          <div className='user-list'>
            {this.state.userData.map((user, key)=>{
              return(
                <UserList
                  user={user}
                  key={key}
                  />
              )
            })}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h1 className="App-title">Github User Search</h1>
          <p>Powererd by the <a>GitHub API</a></p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type='text' name='username' value={this.state.username} placeholder='enter a username' onChange={this.handleChange} />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>

        <div className='App-body'>
           {this.renderUserList()}
        </div>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
