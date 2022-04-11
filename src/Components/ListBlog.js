import React from "react";
import { Link } from 'react-router-dom';


function ListBlog() {
    return (
      <>    
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className='blog_list_style gx-5'>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl1.png' } alt='blog image' />
              <h5>Cleaning & Health</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl2.png' } alt='blog image' />
              <h5>Use of Tools</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl3.png' } alt='blog image' />
              <h5>New Era of Cleaning</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl4.png' } alt='blog image' />
              <h5>Dry Cleaning</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl5.png' } alt='blog image' />
              <h5>Laundary Services</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
            <li>
              <Link to='/blog-detail'>
              <img src={process.env.PUBLIC_URL + '/assets/images/bl6.png' } alt='blog image' />
              <h5>Keeping Notes</h5>
              <p>At vero eos et accusamus et iusto..</p>
              <p>Read More..</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
      </>
      );
    }
  
  export default ListBlog
  