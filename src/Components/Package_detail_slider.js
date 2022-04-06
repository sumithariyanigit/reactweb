import React, { Component } from "react";
import Slider from "react-slick";
import { Outlet, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Package_detail_slider() {
   
   const baseUrl = process.env.PUBLIC_URL + '/assets/images/';

   const settings = {
      customPaging: function(i) {
        return (
          <a>
             <img src={`${baseUrl}pk${i + 1}.png`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <>
     <section className="about__area pb-45 pt-45 p-relative border-style">
            <div className="container">
               <div className="row ">
                  <div className="col-lg-7 order-last">
                     <div className="about__wrapper about__wrapper-2 mb-20">
                        <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title mb-3">Package Heading</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type It has survived not only five centuries, but also the leap into
                               Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock,  </p>
                                
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text.  dummy text ever since the 1500s,
                                when an unknown printer took a galley of type It has survived not only five centuries, It has roots in a piece of classical Latin literature from 45 BC, Lorem Ipsum is not simply random text. It has roots in a piece of classical  making it over 2000 years old. Richard McClintock, </p>
                                 <div class="rating mt-3 mb-3">
                              <ol>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className='active'><i class="icon_star"></i></li>
                                 <li  className=''><i class="icon_star"></i></li>
                                 <li  className=''><i class="icon_star"></i></li>
                                 <div className="count_review">
                                    (200 reviews)
                                 </div>
                              </ol>
                            
                           </div>
                           <div className="booknow">
                              <Link to='/boook-package' class="w-btn w-btn-blue w-btn-blue-header btnblack">Book Now</Link>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 wow fadeInRight order-lg-first text-center" data-wow-delay=".7s">
                     <div className="slick_card about__thumb-wrapper-2 p-relative m-img">
                     <Slider {...settings}>
                        <div className="slick_list">
                          <img src={process.env.PUBLIC_URL + '/assets/images/pk1.png'} />
                        </div> 
                        <div className="slick_list">
                          <img src={process.env.PUBLIC_URL + '/assets/images/pk2.png'} />
                        </div> 
                        <div className="slick_list">
                          <img src={process.env.PUBLIC_URL + '/assets/images/pk3.png'} />
                        </div>                   
                     </Slider>
                     </div>
                  </div>
               </div>
            </div>
</section>  
        </>
 )};

 export default Package_detail_slider;