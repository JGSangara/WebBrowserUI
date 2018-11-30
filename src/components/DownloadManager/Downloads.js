import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import DownloadsList from './DownloadsList'

export default class DownloadsSection extends Component {
  render() {
    return (
     <div> 
      <div className="Downloads">
        <div class="Downloads_header">
          <label>Downloads</label>
          <div className="search_toolBox">
          <span className="search__icon"><Ionicon icon="md-search" color="white" fontSize="1.2em"></Ionicon></span>
          <input type="text" id="search_downloads" placeholder="Search Downloads" />
          </div>
          <span className="Downloads__options">
              <input type="checkbox" id="options__toggle" />
              <label className="toggle__DownloadsOptions" htmlFor="options__toggle"><Ionicon icon="md-more" color="white" fontSize="2em"></Ionicon></label>              
          </span>
        </div>  
      </div>
      <DownloadsList />
      </div>     
    )
  }
}

