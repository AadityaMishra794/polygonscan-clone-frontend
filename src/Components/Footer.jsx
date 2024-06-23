// components/Footer.js

import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <p id='footer '>&copy; 2024 PayMe. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;