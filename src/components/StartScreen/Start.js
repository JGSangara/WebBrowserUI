import React, { Component } from 'react'
import PrivateScreen from './Private'
import logo from '../../static/google2.png'

const NormalStart = ()=>{
  return (
    <div className="container">
    <div className="googleSearchToolContainer">
    <figure><img src={logo}/></figure>
      <div className="google__SearchTool">
           <input id="searchTool_text" type="text" placeholder="Search Google or type a URL" />
           <span className="searchTool_icon"></span>
      </div>
    </div>
 </div>
  )
}

export default class StartWindow extends Component {
  
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <div className="browserStartScreen">
        {
          this.props.privatemode ?  <PrivateScreen /> : <NormalStart /> 
        }
  
      </div>
    )
  }
}
