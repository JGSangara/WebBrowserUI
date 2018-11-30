import React, { Component } from 'react'
import Ionicon from 'react-ionicons'

const OnClickSettingsMenu = (props)=>
{
        
               if(props.status)
               {
                   return(     <div className="afterClickSettings">
                   <div className="container">
                     <ul>
                         <li><h1>Settings</h1> <label htmlFor="options__toggle" className="close_settings"><Ionicon icon="md-close" fontSize="25px"/></label></li>
                         <li><Ionicon icon="ios-people" fontSize="25px"/> People</li>
                         <li><Ionicon icon="ios-brush" fontSize="25px"/> Appearance</li>
                         <li><Ionicon icon="ios-search" fontSize="25px"/> Search Engine</li>
                         <li><Ionicon icon="md-browsers" fontSize="25px"/> Default Browser</li>
                         <li>Manage Extensions</li>
                         <li>Check for Updates</li>
                         <li>About Browser</li>
                     </ul>
                   </div>
                </div>)
               }
               else
               {
                         return(<div></div>)
               }
          
           
}


export default class BrowserSettings extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            menuStatus:true
        }
        this.handleMenu =  this.handleMenu.bind(this);
    }

    handleMenu()
    {
        
    }
    render() {
    return (
      <div className="__mainSettings">
        <div class="settings_header">
        
        <span className="Settings__options">
              <input type="checkbox" id="options__toggle" style={{display:'none'}}/>
              <label className="toggle__settingsOptions" htmlFor="options__toggle"><Ionicon icon="md-menu" color="white" fontSize="2em"></Ionicon></label>
               <OnClickSettingsMenu closeMenu={this.handleMenu} status={this.state.menuStatus} />
          <label>Settings</label>
          </span>

          <div className="search_toolBox">
          <input type="text" id="search_settings" placeholder="Search Settings" />
          <span className="search__icon"><Ionicon icon="md-search" color="white" fontSize="1.2em"></Ionicon></span>
          </div>
        </div>
      </div>
    )
  }
}
