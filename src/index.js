import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import Header from './containers/Header'
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

  render() {
    return (
      <div className="App">
        <Header />
        <div className='App-body'>
        <UserDetails userDetails={this.state.userDetails} />
        <UserList />
        </div>
        <Footer/>
      </div>
    );
  }
}

const createStorewithMiddleware = compose(
  applyMiddleware(ReduxPromise),
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)

ReactDOM.render(
  <Provider store={createStorewithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
