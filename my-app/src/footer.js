import React from 'react'
import Footer from "./Footer.css"
export default function Mainfooter() {
  return (<>
    <div class="content">
     
    </div>

    <footer>
        {/*  Left Sec*/}
        <div class="footer-left">
            <div class="footer-contact">
                <p><strong>reporting@apnconsultant.nl</strong></p>
                <p>Service Vista Private Limited & Lawrence Income Refined Income for Office, Montagier, Laitonne – 202001, State Private</p>
            </div>
            <div class="footer-links">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="footer-copyright">
                <p>&copy; 2024 Apna Consultant. All rights reserved.</p>
            </div>
        </div>

        <div class="vertical-line"></div>

       {/* Right sec */}
        
        <div class="footer-right">
            <div class="footer-logo">
                <img src="logo.webp" alt="Logo" />
            </div>
            <div class="footer-social">
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
</>
  )
}
