import React,  { useEffect } from 'react';

function TotalPayment() {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
    return (
        <>
<section className="pb-50 pt-50 p-relative border-style total_list_payment">
            <div className="container">
            <div className="row">
                  <div className="col-lg-12">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-25">
                        <h1 className="previous_title section__title-5 section__title-5-p mb-15 text-start">
                          <i className="fal fa-shield-check"></i> Total Payment</h1>
                      </div>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-lg-10">
                 <ul>
                     <li className='list-total'>
                         <h5> <span>1. </span> Kitchen Cleaning</h5>
                         <h5>₹300</h5>
                     </li>
                     <li  className='list-total'>
                         <h5> <span>2. </span>Carpet Cleaning</h5>
                         <h5>₹300</h5>
                     </li>
                 </ul>
                  </div>
                  </div>
            </div>
    </section>
        </>
   );
 }
export default TotalPayment;
