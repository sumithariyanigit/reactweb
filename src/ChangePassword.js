import React,  { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function ChangePassword() {


  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

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
          <form action='/login'>
            <div className='card_book'>
              <div className='header-small'>
                <h1>Change Password</h1>
              </div>
              <div className='row justify-content-center mt-80 mb-40'>
                  <div className='col-lg-10'>                
              <div className='row'>
                <div className='col-lg-12 mt-30'>
                  <div className='sign__input'>
                    <input type={passwordShown ? "text" : "password"} name='' className='from-control' placeholder='New Password' />
                  </div>
                </div>
                <div className='col-lg-12 mt-30'>
                  <div className='sign__input'>
                    <input type={passwordShown ? "text" : "password"} name='' className='from-control' placeholder='Confirm New Password' />
                  </div>
                </div>

                <div className='col-lg-12 mt-30'>
                <div className='showpass'>
                  <label for='showpassword'>
                  <input type='checkbox' onClick={togglePassword} id='showpassword' /> 
                  <span>Show Password</span>
                  </label>
                </div>
                </div>
              


                <div className='col-lg-12 mt-40 text-center'>
                <button type="submit" className="w-btn w-btn-blue w-btn-blue-header btnpay mb-10" href="">Submit</button>
                 {/* <div className='text-center'>
                  <Link to='/login' className='title_user mt-30 backto'>Back to login</Link>
                  </div> */}
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

export default ChangePassword;