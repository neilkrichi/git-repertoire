import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './containers/UserList'
import UserDetails from './containers/UserDetails'
import reducers from './reducers'

import './styles/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userData: [],
      count: 0,
      selectedUser: 'neilkrichi',
      userDetails: []
    }
  }

/*  getUser(username) {
    axios.get(`https://api.github.com/search/users?q=${username}`)
    .then(response => {
      this.setState({userData: response.data.items, count: response.data.total_count});
      console.log(response)
      //console.log(this.state.userData)
      if (response.message === 'Not Found') {
        let error = 'There was an error'
        console.log(error)
      }
      return response
    })
    .catch((error) => {
    })
  } */

/*  getUserDetails(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response)
      this.setState({userDetails: response.data})
    })
  } */

  render() {
    return (
      <div className="App">
        <Header />
        <div className='App-body'>
        <UserDetails userDetails={this.state.userDetails} />
        <UserList
          userData={this.state.userData}
          count={this.state.count}
          username={this.state.username}
           />
        </div>
        <Footer/>
      </div>
    );
  }
}

const createStorewithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStorewithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
