import React, { useEffect, useRef } from 'react';
import './Footer.css';
import NUSLogo from './Website Data/nus_logo_full-horizontal.jpg'
import { Link } from 'react-router-dom';

const Footer = () => {

    const leftTextRef = useRef(null);
    const midTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        const updateMargins = () => {
            // const leftTextHeight = leftTextRef.current.offsetHeight;
            const brlFooter = leftTextRef.current.querySelector('.BRL_Footer');
            const brlFooterHeight = brlFooter.offsetHeight + 1.65 * window.innerWidth / 100;
            const leftTextH3 = leftTextRef.current.querySelector('.left_text h3');
            const leftTextH3Height = leftTextH3.offsetHeight + parseFloat(window.getComputedStyle(leftTextH3).marginBottom);
            const totalHeight = leftTextH3Height + brlFooterHeight;

            // Calculate mid_text h3 height and subtract it from totalHeight
            const midTextH3Height = midTextRef.current.offsetHeight;
            const remainingHeightMid = totalHeight - midTextH3Height;
            midTextRef.current.style.marginBottom = `${remainingHeightMid}px`;

            // Calculate right_text h3 height and subtract it from totalHeight
            const rightTextH3Height = rightTextRef.current.offsetHeight;
            const remainingHeightRight = totalHeight - rightTextH3Height;
            rightTextRef.current.style.marginBottom = `${remainingHeightRight}px`;
        };

        // Initial adjustment
        updateMargins();

        // Update on window resize
        window.addEventListener('resize', updateMargins);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateMargins);
        };
    }, []);

    return (
        <>
            <div className="Footer">
                <div className="footer-container">
                    <div className="left" ref={leftTextRef}>
                        <div className="left_text">
                            <h3>Building Robotics Laboratory</h3>
                            <div className="BRL_Footer">
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
                                    <img src={NUSLogo} alt="Logo of the National University of Singapore" className='NUSLogo' />
                                </a>
                                <p>
                                    <a className="bi-envelope" id="footer_Button" href="mailto:ghahramani@nus.edu.sg"></a>
                                    <a className="bi-linkedin" id="footer_Button" href="https://www.linkedin.com/company/building-robotics-lab/" target="_blank"></a>
                                    <a className="bi-github" id="footer_Button" href="https://github.com/Building-Robotics-Lab" target="_blank"></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid_text">
                            <h3 ref={midTextRef}>Mailing Address</h3>
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
                            <h3 ref={rightTextRef}>Quick Links</h3>
                            <Link to={`/`}>
                                <p>Home</p>
                            </Link>
                            <Link to={`/research`}>
                                <p>Research</p>
                            </Link>
                            <Link to={`/team`}>
                                <p>Our Team</p>
                            </Link>
                            <Link to={`/news`}>
                                <p>News</p>
                            </Link>
                            <Link to={`/publications`}>
                                <p>Publications</p>
                            </Link>
                            <Link to={`/join`}>
                                <p>Join the Lab</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uiux">
                <div>
                    <div>
                        <p>© 2024 Building Robotics Laboratory</p>
                    </div>
                    <div>
                        <p>Design by Connor Aucremanne. Code by Ilyas Dawoodjee. Multimedia by <a href="https://www.servicedesignlab.net/" target="_blank">Service Design Lab</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer