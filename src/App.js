import React,{Component} from 'react';
import NewTab from './components/Tabs/Tab'
import SearchURLContainer from './components/SearchBar/SearchURL';
import StartWindow from './components/StartScreen/Start'
import DownloadsSection from './components/DownloadManager/Downloads'
import { HashRouter as Router,Route, Link } from "react-router-dom";

import './sass/main.css'
import Developers from './components/AboutDev/about';


const BrowserContainer = (props)=>{
    return (

        <div className="browserContainer" style={{background:props.BackgroundColor ? props.BackgroundColor : "white"}}>
        <div className="TabsManager">
        <NewTab pageTitle="Start Screen" pageIcon="logo-google"/>
        </div>
        <Route exact path={props.CurrentModeRoute} render={()=><SearchURLContainer mode={props.mode} navCurrentPage={props.CurrentPage} />} />
     </div>
    )
}

class App extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            privateMode:false,
            status:true
        }

        this.handleMode = this.handleMode.bind(this)
    }
    
    handleMode(){
        return this.setState((prev)=>{return {privateMode:!prev.privateMode}})
    }

    render()
    {    
        return(
                 <Router>
                      <div className="myBrowser">
                    <Route exact path="/" render={()=><div>
                        <BrowserContainer CurrentPage="/" CurrentModeRoute="/" mode={this.state.privateMode ? "private" : "normal"} BackgroundColor={this.state.privateMode ? "rgb(50, 54, 57)" : "white"}/>
                    <StartWindow/></div>} />

                    <Route exact path="/Downloads" render={()=><div><BrowserContainer CurrentPage="/#/Downloads" CurrentModeRoute="/Downloads" mode={this.state.privateMode ? "private" : "normal"} BackgroundColor={this.state.privateMode ? "rgb(50, 54, 57)" : "white"}/>
                    <DownloadsSection/></div>} />

                    <Route exact path="/private" render={()=><div onLoad={this.handleMode}>
                    <BrowserContainer CurrentPage="/#/private" CurrentModeRoute="/private" mode={this.state.privateMode ? "private" : "normal"} BackgroundColor={this.state.privateMode ? "rgb(50, 54, 57)" : "white"}/>
                    <StartWindow privatemode={true} /></div>}  />  

                    <Route exact path="/About" render={()=><div><BrowserContainer 
                    CurrentPage="/#/About" CurrentModeRoute="/About" mode={this.state.privateMode ? "private" : "normal"} BackgroundColor={this.state.privateMode ? "rgb(50, 54, 57)" : "white"}/>
                    <Developers/></div>} />

                  </div>
                 </Router>
                 
       
          
        )
    }
}
export default App;
