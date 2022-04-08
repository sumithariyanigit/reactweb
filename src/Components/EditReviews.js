import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
  };

function EditReviews(){

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


return(

    <>
     <Link to='#' onClick={onOpenModal}><i className="fal fa-edit"></i></Link>

      <Modal  open={open} onClose={onCloseModal} center> 
      <div className='modal_haff'>
      <h1 className="previous_title">
         <img className="mr-10" src="/reactweb/assets/images//reviews.jpg" alt="reviews icon" style={{maxWidth:'40px'}}/> Your Reviews</h1>
    <div className='row'>
        <div className='col-lg-12'>
            <form>
                <div className='d-flex rating_modal mb-20 mt-20'>
                <input type="text" className='' placeholder='Headline' />
                <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={37}
                            isHalf={true}
                            emptyIcon={<i className="fas fa-star"></i>}
                            halfIcon={<i className="fas fa-star-half-alt"></i>}
                            fullIcon={<i className="fas fa-star"></i>}
                            activeColor="#ffd700">
                    </ReactStars>
                    </div>
                   
                    <textarea placeholder='Describe your experience(optional)' name='' id='' rows='5'></textarea>
                    <div  className='button-payment text-end mt-20'>
                        <div className='d-inline-flex'>
                        <button type='button' className='btn  w-btn w-btn-white mr-20'>Edit</button>
                        <button type='submit' className='btn btnsubmit w-btn'>Post</button>
                        </div>
                     </div>
            </form>
            </div>
        </div>
    </div>

      </Modal>
    </>
);

}

export default EditReviews;