import React, { Component } from 'react'
import NavigationButtons from '../NavigationToggle/NavigationToggle'
import Settings from '../SettingsMenu/Settings'


const MakeSearchBar = ()=>{
    return (
        <div className="searchBar">
        <input type="text" placeholder="Search here..."/>
        </div>
    )
}
export default class SearchURLContainer extends Component
{   
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (
            <div className="searchBarContainer">
            <NavigationButtons currentPage={this.props.navCurrentPage} previousPage={this.props.navPreviousPage ? this.props.navPreviousPage : ''} nextPage={this.props.navNextPage ? this.props.navNextPage : ''}/>
            <MakeSearchBar />
            <Settings mode={this.props.mode} />          
        </div>
        )
    }
}
