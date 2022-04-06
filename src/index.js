import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import About from './About'
import Blogs from "./Blogs";
import Packages from "./Packages";
import PackageDetail from "./PackageDetail";
import BookPackage from "./BookPackage";
import Contact from "./Contact";
import Profile  from "./Profile";
import Login from "./Login";
import SignUser from "./SignUser";
import FAQ from "./FAQ_C";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import Privacy from "./Privacy";
import Terms from "./Terms";



const Routing = () => {
  return(
    <>
  
    </>
  )
}


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/Package-detail" component={PackageDetail} />
        <Route exact path="/boook-package" component={BookPackage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUser} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/forgotpassword" component={ResetPassword} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/terms" component={Terms} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);