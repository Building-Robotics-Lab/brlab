import React from 'react'
import './Footer.css';
import NUSLogo from './Website Data/NUSLOGO-removebg-preview.png'

const Footer = () => {

    return (
        <>
            <div className="Footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="left_text">
                            <h3>Building Robotics Laboratory</h3>
                            <div class="BRL_Footer">
                                <span>a</span><span>t</span>
                                <span> </span>
                                <span> </span>
                                <span>t</span><span>h</span><span>e</span>
                                <span> </span>
                                <span> </span>
                                <span>N</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>a</span><span>l</span>
                                <span> </span>
                                <span> </span>
                                <span>U</span><span>n</span><span>i</span><span>v</span><span>e</span><span>r</span><span>s</span><span>i</span><span>t</span><span>y</span>
                                <span> </span>
                                <span> </span>
                                <span>o</span><span>f</span>
                                <span> </span>
                                <span> </span>
                                <span>S</span><span>i</span><span>n</span><span>g</span><span>a</span><span>p</span><span>o</span><span>r</span><span>e</span>
                            </div>
                            <div className="logo-buttons-wrapper">
                                <a href="https://www.nus.edu.sg/" target="_blank">
                                    <img src={NUSLogo} className='NUSLogo' />
                                </a>
                                <p>
                                    <a className="bi-envelope" id="footer_Button" href="mailto:ghahramani@nus.edu.sg"></a>
                                    <a className="bi-linkedin" id="footer_Button" href="https://www.linkedin.com/company/building-robotics-lab/" target="_blank"></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid_text">
                            <h3>Mailing Address</h3>
                            <p>Building Robotics Laboratory</p>
                            <p>Department of the Built Environment</p>
                            <p>College of Design and Engineering</p>
                            <p>National University of Singapore</p>
                            <p>SDE2, #03-17 [FEC1]</p>
                            <p>Singapore 117565</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_text">
                            <h3>Quick Links</h3>
                            <p><a href="/">Home</a></p>
                            <p><a href="/research">Research</a></p>
                            <p><a href="/our_team">Our Team</a></p>
                            <p><a href="/news">News</a></p>
                            <p><a href="/publications">Publications</a></p>
                            <p><a href="/join_the_lab">Join the Lab</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uiux">
                <div class="row justify-content-between">
                    <div class="col-6 lg-3">
                        <p>© 2023 Building Robotics Laboratory</p>
                    </div>
                    <div class="col-6 lg-3">
                        <p>Design: Connor Aucremanne | Code: Ilyas Dawoodjee</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer