import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Testing from './Testing'



const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/testing" component={Testing} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
