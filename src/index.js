import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from  "react-router-dom"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

// Iron Gate Cleaning Services Pages
import App from './App';
import About from './About'
import Blogs from "./Blogs";
import Packages from "./Packages";
import PackageDetail from "./PackageDetail";
import BookPackage from "./BookPackage";
import Contact from "./Contact";
import Profile  from "./Profile";
import Login from "./Login";
import SignUser from "./SignUser";
import FAQ from "./FAQ";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import Privacy from "./Privacy";
import Terms from "./Terms";
import PreviousBooking from "./PreviousBooking";
import TotalPayment from "./TotalPayment";
import YourReviews from "./YourReviews";
import ScrollToTop from "./ScrollToTop";
import UpdateProfile from "./UpdateProfile";





const Routing = () => {
  return(
    <Router>
       <ScrollToTop />
      <Header />
      <Switch>
       {/* <Redirect from="/" to="/home" />
        <Route path="/">
          <App />
        </Route> */}
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
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
        <Route exact path="/previous-booking" component={PreviousBooking} />
        <Route exact path="/total-payment" component={TotalPayment} />
        <Route exact path="/your-reviews" component={YourReviews} />
        <Route exact patth="/update-profile" component={UpdateProfile} />
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