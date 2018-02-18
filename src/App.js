import React, { Component } from 'react';
import Footer from './Footer'
import UserList from './UserList'
import UserDetails from './UserDetails'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userData: [],
      count: 0
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
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then(response => response.json())
    .then(response => {
      this.setState({userData: response.items, count: response.total_count});
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

  renderUsers() {
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
           {this.renderUsers()}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
