import React from 'react';
import logod from './logiclink.png';
import './Footer.css' ;
import { Link } from 'react-router-dom';

export default function Mainfooter() {
  return (
    <>
      <div className="content"></div>

      <footer>
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-contact">
            <p><strong>reporting@logi-links.nl</strong></p>
            <p>Service Vista Private Limited & Lawrence Income Refined Income for Office, Montagier, Laitonne – 202001, State Private</p>
          </div>
          <div className="footer-links">
          <Link to="/details">About Us</Link>
  <Link to="/services">Services</Link>
  <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 Logi-Links. All rights reserved.</p>
          </div>
        </div>

        <div className="vertical-line"></div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-logo">
            <img src={logod} alt="Logo" />
          </div>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/embed/4K8IEzXnMYk?autoplay=1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
