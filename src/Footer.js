import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

export default class Footer extends Component {
  render() {
    return(
        <div className='footer'>
          <p>Made in Van city w luv</p>
          <p>View source code on <Link to='/git' target="_blank">Github</Link></p>
        </div>
    )
  }
}
