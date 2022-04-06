import React from "react" ;


function Footer() {
    return (
 <>

<footer className="footer__area grey-bg-3 pt-40 p-relative fix">
         <div className="footer__shape">
            <img className="footer-circle-1 footer-2-circle-1" src="assets/img/icon/footer/home-1/circle-1.png" alt="" />
            <img className="footer-circle-2 footer-2-circle-2" src="assets/img/icon/footer/home-1/circle-2.png" alt="" />
         </div>
         <div className="footer__top">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
                     <div className="footer__widget mb-35 subscribe_footer">
                        <h5>Sign up to receive<br /> exclusive offers and news</h5>
                     <form action="#">
                        <div className="join-from">
                        <input type="text" placeholder="Email address.." />
                        <button type="submit" className="w-btn w-btn-2">Subscribe</button>
                        </div>
                        </form>
                        <div className="socail">
                           <h5>
                              Follow us on
                           </h5>
                           <h5>
                           <a href="#" target='blank'><i className="fab fa-google-plus-g"></i></a>
                           <a href="#" target='blank'><i className="fab fa-twitter"></i></a>
                           <a href="#" target='blank'><i className="fab fa-facebook-f"></i></a>
                           <a href="#" target='blank'><i className="fab fa-instagram"></i></a>
                           <a href="#" target='blank'><i className="fab fa-youtube"></i></a>
                           <a href="#" target='blank'><i className="fab fa-linkedin-in"></i></a>
                           </h5>
                        </div>
                        <div className="faddress mb-3">
                           <h6>Lorem Ipsum is simply dummy text  <br /> indore 452001, MP India</h6>
                        </div>
                        <div className="fnumber mb-3">
                          <div>
                            <a href="#">123457890,</a>
                            <a href="#">123457890,</a>
                           </div>
                           <div>
                            <a href="#">123457890,</a>
                            <a href="#">123457890,</a>
                           </div>
                        </div>
                        <div className="fdemail">
                       <a href="#">irangatecleaningsearvice@gmail.com</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3  wow fadeInUp" data-wow-delay=".5s">
                     <div className="footer__widget mb-35 footer__pl-70">
                        <div className="footer__widget-title mb-15">
                           <h3>Customer Service</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><a href="#">FAQ</a></li>
                                 <li><a href="#">Terms</a></li>
                                 <li><a href="#">Privacy Policy</a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="footer__widget-title mb-15 mt-30">
                           <h3>Corporation</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><a href="#">About us</a></li>
                                 <li><a href="#">Customer Service</a></li>
                                 <li><a href="#">Company</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 wow fadeInUp" data-wow-delay=".7s">
                     <div className="footer__widget mb-35 footer__pl-90">
                        <div className="footer__widget-title mb-15">
                           <h3>Why Choose Use</h3>
                        </div>
                        <div className="footer__widget-content">
                           <div className="footer__link footer__link-2">
                              <ul>
                                 <li><a href="#">Shopping Guide</a></li>
                                 <li><a href="#">Blog</a></li>
                                 <li><a href="#">Company</a></li>
                                 <li><a href="#">Contact Us</a></li>
                              </ul>
                           </div>
                           <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" style={{'maxWidth' : '150px'}} /> 
                        </div>
                     </div>
                  </div>
                </div>
            </div>
         </div>
         <div className="footer__bottom">
            <div className="container">
               <div className="footer__copyright">
                  <div className="row">
                     <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="footer__copyright-wrapper footer__copyright-wrapper-2 text-center">
                           <p>© 2022 <span>Iron Gate Cleaning Service</span> .All Rights Reserved. <a href="#"></a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </footer>
  
      </>
    );
  }

export default Footer




