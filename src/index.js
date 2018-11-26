import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Fira Sans', 'sans-serif']
  }
});
//import { HashRouter as Router,Route} from "react-router-dom";

ReactDOM.render(<App />,document.getElementById('root'));
