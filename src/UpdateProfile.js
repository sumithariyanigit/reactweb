import React,  { useEffect } from 'react';


function UpdateProfile(){
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("body_black");
        return () => {
          body.classList.remove("body_black");
        }
      } );


return(
    <>
    <section className='update_profile'>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-lg-10'>
            <form>
            <h3 className='text-center'>Update Profile</h3>
            <div className='userImg mb-20'>
             <div className='imgbox'>
             <img src={process.env.PUBLIC_URL + '/assets/images/profile.png'} />
             </div>
             <div className='userimgs'>
                 <label for='fileID'>
                 <input type='file' name='fileprofile' id='fileID'  />
                   <span className='titleicon mr-20'> <i className="fal fa-edit"></i></span>
                  <span className='titlesmall'> Change Profile Picture </span>
             </label>
             </div>          
         </div>
         <div className='row'>
         <div className='input_type col-lg-12'>
            <input type='text' name='' id="" placeholder='Change Name' />
         </div>
         <div className='input_type col-lg-12'>
            <input type='email' name='' id="" placeholder='Update Email Address' />
         </div>
         <div className='input_type col-lg-7 pr-50'>
             <div className='d-flex'>
             <select className='mr-20' name='' id="" >
                 <option>91</option>
                 <option>82</option>
             </select>
             <input type='number' name='' id="" placeholder='Update Mobile No.' />
             </div>     
         </div>
         <div className='input_type col-lg-5'>
            <div className='otpinput'>
                <h5 className='mr-20'>ENTER OTP</h5>
                <input type='text' maxLength='1' name='f1' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f2' id='' className='mr-10' />
                <input type='text' maxLength='1' name='f4' id='' />
            </div>
         </div>
         <div className='mt-10 buttonsubmit'>
         <div className="d-flex justify-content-end">
             <button className="btn  w-btn w-btn-white mr-20">Decline</button>
             <button className="btn btnsubmit w-btn">Save</button></div>
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

export default UpdateProfile;