import React,  { useEffect } from 'react';
import { Link } from "react-router-dom";


function ResetPassword() {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );
    return (
    <>
   <section className="pb-45 pt-45 p-relative border-style userForm">
    <div className="container">
      <div className="row justify-content-center">
        <div className='col-lg-9 cm-lg-9'>
          <form action='/changepassword'>
            <div className='card_book'>
              <div className='header-small'>
                <h1>Forgot Your Password</h1>
              </div>
              <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>                
              <div className='row'>
                <div className='col-lg-12 mt-30'>
                  <div className='sign__input'>
                      <h4 className='mb-3' style={{fontWeight: '400'}}>Please enter the email address you'd like your password reset <br /> information sent to </h4>
                    <input type='email' name='' className='from-control' placeholder='Enter your Email Address!' />
                  </div>
                </div>
              


                <div className='col-lg-12 mt-50 text-center'>
                  <Link to='/changepassword' className="w-btn w-btn-blue w-btn-blue-header btnpay">Continue</Link>
                {/* <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay" href="">Continue</button> */}
                 <div className='text-center'>
                  <Link to='/login' className='title_user mt-30 backto'>Back to login</Link>
                  </div>
                </div>

              </div>
              </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
    );
    }

export default ResetPassword;