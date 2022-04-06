import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import About from './About'



const Routing = () => {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);