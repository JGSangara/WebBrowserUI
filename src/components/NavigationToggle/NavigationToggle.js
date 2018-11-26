import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import {Link,Redirect} from 'react-router-dom'

export default class NavigationButtons extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentPageLink:'',
            previousPageLink:'',
            nextPageLink:'',
            homePageLink:'/'
        } 
    }
    componentWillMount()
    {
        this.setState(()=>{
            return {
                currentPageLink:this.props.currentPage ? this.props.currentPage : false,
                previousPageLink:this.props.previousPage ? this.props.previousPage : false,
                nextPageLink:this.props.nextPage ? this.props.nextPage : false
            }
        })
    }
    render()
    {
        return (
            <div className="navigationToggle">
            { 
                this.state.previousPageLink ? 
                <Link title="click to go back" to={this.state.previousPageLink}>
                <Ionicon color="#212020" icon='md-arrow-round-back' fontSize="1.7em"  className="icon" name="arrow-back"></Ionicon>
                </Link> : 
                <Ionicon color="#e5e5e5" icon='md-arrow-round-back' fontSize="1.7em"  className="icon" name="arrow-back"></Ionicon>
            }
            {
                this.state.nextPageLink ?
                <Link title="click to forward" to={this.state.nextPageLink}>
                 <Ionicon color="#212020" icon='md-arrow-round-forward' fontSize="1.7em"  className="icon" name="arrow-forward"></Ionicon>
                </Link> :
                <Ionicon color="#e5e5e5" icon='md-arrow-round-forward' fontSize="1.7em"  className="icon" name="arrow-forward"></Ionicon>
            }
            {
               this.state.currentPageLink ?
               <Link title="click to reload this page" to={this.state.currentPageLink}>
               <Ionicon color="#212020" icon='md-refresh' fontSize="1.7em"  className="icon" name="refresh"></Ionicon>
               </Link> :
               <Ionicon color="#e5e5e5" icon='md-refresh' fontSize="1.7em"  className="icon" name="refresh"></Ionicon>
            }
            <Link to="/" title="Home"><Ionicon icon='md-home' fontSize="1.7em"  className="icon" name="home"></Ionicon></Link>
        </div>
        )
    }
}