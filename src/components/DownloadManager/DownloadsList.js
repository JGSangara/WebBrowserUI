import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import logo from '../../static/Word-icon.png'

export default class DownloadsList extends Component {
  render() {
     
    return(
        <div className="DownloadsList">
             <div className="DownloadBox">
                       <label>{new Date().toDateString()}</label>
                    <div className="container">
                      <div className="fileTypeIcon"><img src={logo} /></div>
                      <div className="dialogBox">
                        <ul>
                            <li>MyResume.docx</li>
                            <li>{"https://docs.google.com/document/d/19aR97JwbM9DI5UFVSAsg1Brl8gQYzEGlLrb-VzUPC7U".substr(0,50)+"..."}</li>
                            <li>Show in Folder</li>
                        </ul>
                       </div>
                    </div>
             </div>
             <div className="DownloadBox">
                       <label>{new Date().toDateString()}</label>
                    <div className="container">
                      <div className="fileTypeIcon"><img src={logo} /></div>
                      <div className="dialogBox">
                        <ul>
                            <li>MyResume2.docx</li>
                            <li>{"https://docs.google.com/document/d/19aR97JwbM9DI5UFVSAsg1Brl8gQYzEGlLrb-VzUPC7U".substr(0,50)+"..."}</li>
                            <li>Show in Folder</li>
                        </ul>
                       </div>
                    </div>
             </div>
        </div>
    )
}

}    