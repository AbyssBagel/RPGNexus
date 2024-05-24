import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

const HomePage = () => {
  return (
    <section id='intro' className='intro position-relative'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <div className='intro-title'>
              <h1 className='d-block'>
                <span className='d-block'>Welcome to the best TTRPG website tool,</span>
                <span className='d-block'>Create and manage your now character now !</span>
              </h1>
            </div>
            <div className='intro_btn'>
              <Link to='/dnd-form' className='intro-btn'>
                Create your character
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
