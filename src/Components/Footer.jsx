// components/Footer.js

import React from 'react';
import '../Styles/Footer.css';
import "../Styles/utility.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <p id='footer '>&copy; 2024 PayMe. All rights reserved.</p>
        <nav className='items-align'>
          <ul className='items-align'>
            <li className='footer-list'><a href="#">Privacy Policy</a></li>
            <li className='footer-list'><a href="#">Terms of Service</a></li>
            <li className='footer-list'><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;