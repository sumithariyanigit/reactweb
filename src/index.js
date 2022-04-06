import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Blogs from "./Blogs";
import Packages from "./Packages";
import PackageDetail from "./PackageDetail";
import BookPackage from "./BookPackage";
import Contact from "./Contact";
// import Profile  from "./Profile";
import Login from "./Login";
// import SignUp from "./SignUp";



const Routing = () => {
  return(
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/Package-detail" component={PackageDetail} />
        <Route exact path="/boook-package" component={BookPackage} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
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