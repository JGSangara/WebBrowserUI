import React, { Component } from 'react'
import logo from '../../static/private.png'

export class PrivateScreen extends Component {
  render() {
    return (
        <div className="Private__container">
           <figure><img src={logo}/></figure>
           <div className="about__private">
            <h1>You’ve gone incognito</h1>
            <p>Now you can browse privately, and other people who use this device won’t 
                see your activity. However, downloads and bookmarks will be saved. Learn more</p>
                <p></p>
           </div>
        </div>
  
    )
  }
}

export default PrivateScreen
