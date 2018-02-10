import React, { Component } from 'react';
import './App.css';

export default class Avatar extends Component {
  render(){
    return(
      <div className='avatar'>
        <img src='https://avatars0.githubusercontent.com/u/11022827?s=460&v=4' className='thumbnail' />
      </div>
    )
  }
}
