import React, { Component } from 'react';
import '../styles/style.css';

export default class Footer extends Component {
  render() {
    return(
        <div className='footer'>
          <p>Made in VanCity with ❤️ and ☕️</p>
          <p>View source code on <span className='link' onClick={()=>window.open('https://github.com/neilkrichi/git-repertoire', '_blank')} >Github</span></p>
        </div>
    )
  }
}
