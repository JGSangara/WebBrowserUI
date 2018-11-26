import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class SettingsMenu extends Component {
  
  constructor(props)
  {
    super(props)
    this.state = {
      IncognitoMode: false
    }
   this.handleMode = this.handleMode.bind(this)
  }

  componentWillMount()
  {
    if(this.props.mode === "private")
    {
      this.setState({IncognitoMode:true})
    }
    else
    {
      this.setState({IncognitoMode:false})
    }
  }
  handleMode()
  {
    return this.setState((prev)=>{return {IncognitoMode:!prev.IncognitoMode}})
  }
  render() {
    return (
        <div className="settingsMenu">
        <ul>
          <li>New tab</li>
          <li>New window</li>
          <li><Link to={this.state.IncognitoMode ? "/" : "/private"}>{this.state.IncognitoMode ? "Switch to Normal Mode" : "Incognito Mode"}</Link></li>
        </ul>
        <ul>
          <li>History</li>
          <li><Link to='/Downloads'>Downloads</Link></li>
          <li>Bookmarks</li>
        </ul>
        <ul>
          <li>Settings</li>
          <li>Help</li>
          <li><Link to="/About">About Developers</Link></li>
          <li>exit</li>
        </ul>
      </div>
    )
  }
}
