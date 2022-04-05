import React from 'react';
// import { Link } from "react-router-dom";
// import {NavLink} from 'react-router-dom';
// // import Sidebar from './Components/Sidebar';

function Header() {

  return (
    <>
      <header>
         <div id="header-sticky" className="header__area header__transparent header__padding">
            <div className="container p-0">
               <div className="row align-items-center">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-6">
                     <div className="logo">
                        <a href='#' className='homelogo'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" width='100px' /> 
                        <img src={process.env.PUBLIC_URL + '/assets/images/wlogo.png'} alt="logo" width='100px' /> 
                        </a>
                      </div>
                  </div>
                  <div className="col-lg-8 d-none d-lg-block text-end">
                     <div className="main-menu">
                        <nav id="mobile-menu">
                           <ul>
                              <li><a href='#'>About</a></li>
                              <li><a href='#'>Blog</a></li>
                              <li><a href='#'>Packages</a></li>
                              <li><a href='#'>Contact Us</a></li>
                              <li><a href='#'>Login / Sign up</a></li>
                              <li><div className="language">
                                 <select>
                                    <option>ENG</option>
                                    <option>HINDI</option>
                                 </select>
                              </div>
                              </li>
                    
                             
                              
                           </ul>
                        </nav>
                     </div>
                  </div>
                  <div className='mobile_btn'>
                        {/* <Sidebar /> */}
                        </div>               
               </div>
            </div>
         </div>
</header>  
    </>
  );
}

export default Header;