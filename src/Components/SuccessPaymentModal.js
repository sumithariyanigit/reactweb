import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";

function SuccessPaymentModal(){

    const [open, setOpen] = useState(false);
    const successModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


return(

    <>
     <div className='d-block' onClick={successModal}>Click Success Modal</div>

      <Modal  open={open} onClose={onCloseModal} center> 
      <div className='modal_haff'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <img src={process.env.PUBLIC_URL + '/assets/images/success.png'} style={{maxWidth:'200px'}} alt='success icon' />
          <h4 className='paymentsuc'>Payment Recieved</h4>
        </div>
        </div>
    </div>

      </Modal>
    </>
);

}

export default SuccessPaymentModal;