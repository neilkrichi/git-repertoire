import React, { Component } from 'react';
import './App.css';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className='user-container'>
        <div className='user-info'>
          <img className='thumbnail' src={this.props.user.avatar_url} className='thumbnail' />
          <h2 onClick={()=>{}}>{this.props.user.login}</h2>
        </div>
      </div>
    )
  }
}
