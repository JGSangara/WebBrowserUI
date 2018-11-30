import React, { Component } from 'react'
import Ionicon from 'react-ionicons'


export default class DownloadsList extends Component {
  render() {
     
    return(
        <div className="DownloadsList">
             <div className="DownloadBox">
                       <label>{new Date().toDateString()}</label>
                    <div className="container">
                      <div className="fileTypeIcon"></div>
                      <div className="dialogBox">
                        <ul>
                            <li>MyResume.docx</li>
                            <li>link</li>
                            <li>Show in Folder</li>
                        </ul>
                       </div>
                    </div>
             </div>
             <div className="DownloadBox">
                       <label>{new Date().toDateString()}</label>
                    <div className="container">
                      <div className="fileTypeIcon"></div>
                      <div className="dialogBox">
                        <ul>
                            <li>MyResume.docx</li>
                            <li>link</li>
                            <li>Show in Folder</li>
                        </ul>
                       </div>
                    </div>
             </div>
        </div>
    )
}

}    