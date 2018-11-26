import React, { Component } from 'react'
import Ionicon from 'react-ionicons'

export default class NewTab extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            tabTitle:this.props.pageTitle,
            tabIcon:this.props.pageIcon,
            tabCloseReference:''
        }
    }
  render() {
    return (
        <div className="TabsContainer">
        <label title={this.state.tabTitle}><Ionicon icon={this.state.tabIcon} fontSize="1em"></Ionicon><span className="webpageTitle">{this.state.tabTitle.toString().substr(0,29)}</span></label>
        <Ionicon icon='md-close' fontSize="1em" className="close_icon" name="close"></Ionicon>
        <div className="add_icon">
            <Ionicon icon='md-add' fontSize="1em"  className="icon" name="add"></Ionicon>
        </div>
       </div>
    )
  }
}
