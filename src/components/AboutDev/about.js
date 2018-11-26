import React, { Component } from 'react'
import logo from '../../static/dev1.png'
import logo2 from '../../static/dev2.png'
import logo3 from '../../static/dev3.png'
import Ionicon from 'react-ionicons'
export default class Developers extends Component
{

render()
{
    return(
        <div className="__aboutDev">
          <div className="container">
             <div className="profile">
                <figure><img src={logo2}/></figure>
                <div className="_aboutInfo">
                  <ul>
                      <li>Sushant Singh</li>
                      <li><Ionicon icon="logo-linkedin" fontSize="35px" color="#0077B5"/>
                      <Ionicon icon="logo-github" fontSize="35px" color="black" />
                      </li>
                  </ul>
                </div>
             </div>
             <div className="profile">
                <figure><img src={logo3}/></figure>
                <div className="_aboutInfo">
                  <ul>
                      <li>Abhishek Chauhan</li>
                      <li><Ionicon icon="logo-linkedin" fontSize="35px" color="#0077B5"/>
                      <Ionicon icon="logo-github" fontSize="35px" color="black" /></li>
                  </ul>
                </div>
             </div>
             <div className="profile">
                <figure><img src={logo}/></figure>
                <div className="_aboutInfo">
                  <ul>
                      <li>Shubhendra Singh Chauhan</li>
                      <li><Ionicon icon="logo-linkedin" fontSize="35px" color="#0077B5"/>
                      <Ionicon icon="logo-github" fontSize="35px" color="black" /></li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
    )
}

}