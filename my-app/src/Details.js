import React from 'react'
import './details.css'
import ojs from './ojas.jpg';
import zeesh from './zeeshan.jpg';
import kush from './kushagra.jpg';
import git from './github.svg';
import link from './linkedin.svg';
export default function Details() {
  return (<>
    <div className="about-us-container">
    <h1>About Us</h1>
    <p>Meet our team </p>

    <div className="about-us-team">
        <div className="about-us-card">
            <div className="about-us-frame">
                <img className="about-us-pic" src={kush} alt="Kushagra Gupta" />
            </div>
            <div className="about-us-info">
                <h3>Kushagra Gupta</h3>
                <div className="about-us-social">
                    <a href="https://github.com/kush1jpeg" target="_blank"><img src={git} alt="GitHub" width="24" /></a> 
                    <a href="https://www.linkedin.com/in/kushagra-gupta-dystopia/" target="_blank"><img src={link} alt="LinkedIn" width="24" /></a>
                </div>
            </div>
        </div>

        <div className="about-us-card">
            <div className="about-us-frame">
                <img className="about-us-pic" src={zeesh} alt="Zeeshan Ahmad Alavi" />
            </div>
            <div className="about-us-info">
                <h3>Zeeshan A. Alavi</h3>
                <div className="about-us-social">
                    <a href="https://github.com/LeeFred3042U" target="_blank"><img src={git} alt="GitHub" width="24" /></a> 
                    <a href="https://www.linkedin.com/in/zeeshan-ahmad-alavi/" target="_blank"><img src={link} alt="LinkedIn" width="24" /></a>
                </div>
            </div>
        </div>

        <div className="about-us-card">
            <div className="about-us-frame">
                <img className="about-us-pic" src={ojs}  alt="Ojas Dwivedi" />
            </div>
            <div className="about-us-info">
                <h3>Ojas Dwivedi</h3>
                <div className="about-us-social">
                    <a href="https://github.com/ultfone" target="_blank"><img src={git} alt="GitHub" width="24" /></a> 
                    <a href="https://www.linkedin.com/in/ojas-dwivedi-48903a216/" target="_blank"><img src={link} alt="LinkedIn" width="24" /></a>
                </div>
            </div>
        </div>
    </div>

</div>
 </> )
}
