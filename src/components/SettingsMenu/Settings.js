import React, { Component } from 'react'
import SettingsMenu from './MakeMenu'
import Ionicon from 'react-ionicons'

export default class Settings extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
        <div className="settingsToggle">
               <input type="checkbox" id="toggleSettingsButton" style={{display:'none'}} />
               <SettingsMenu mode={this.props.mode} />
               <label htmlFor="toggleSettingsButton" className="settingsButton"><Ionicon icon='md-more' fontSize="2rem" className="icon" name="settings"></Ionicon></label>
            </div>
    )
  }
}

