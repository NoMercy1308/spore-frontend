// src/Footer.js
import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid footer pt-5'>
      <div className='row'>
        <div className='col-md-12 text-center py-4'>
          <a
            href='https://github.com/sporeproject/Spore-frontend'
            target='_blank'
            className='credit'
            rel='noopener noreferrer'
          >
            {' '}
            Made with &#127812; by the Spore community
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
