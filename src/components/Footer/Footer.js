import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <div className="footer-wrapper">
            <svg id="triangle-footer" viewBox="0 71.8 1280 28.2">
                <polygon fill="#551E54" points="0,100 1280,71.8 1280,100 "/>
            </svg>
            <div className="social-footer">
                <div className="social">
                    <div className="intro">You can follow me on my Social networks accounts:</div>
                    <figure>
                        <a href="https://github.com/Geeeva" target="_blank" rel="noopener noreferrer">
                            <svg id="github" viewBox="0 0 30.9 30.5">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5,0C6.9,0,0,7,0,15.6c0,6.9,4.4,12.8,10.6,14.8c0.8,0.1,1.1-0.3,1.1-0.8 c0-0.4,0-1.4,0-2.7c-4.3,0.9-5.2-2.1-5.2-2.1c-0.7-1.8-1.7-2.3-1.7-2.3c-1.4-1,0.1-0.9,0.1-0.9c1.6,0.1,2.4,1.6,2.4,1.6
                                c1.4,2.4,3.6,1.7,4.5,1.3c0.1-1,0.5-1.7,1-2.1c-3.4-0.4-7-1.7-7-7.7c0-1.7,0.6-3.1,1.6-4.2c-0.2-0.4-0.7-2,0.2-4.1 c0,0,1.3-0.4,4.3,1.6c1.2-0.3,2.6-0.5,3.9-0.5c1.3,0,2.6,0.2,3.9,0.5c3-2,4.2-1.6,4.2-1.6c0.8,2.2,0.3,3.7,0.2,4.1 c1,1.1,1.6,2.5,1.6,4.2c0,6-3.6,7.3-7.1,7.7c0.6,0.5,1,1.4,1,2.9c0,2.1,0,3.8,0,4.3c0,0.4,0.3,0.9,1.1,0.8 c6.1-2.1,10.6-7.9,10.6-14.8C30.9,7,24,0,15.5,0z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ivana-gili%C4%87-04620850" target="_blank" rel="noopener noreferrer" >
                            <svg id="linkedin" viewBox="0 0 30.9 30.5">
                                <g>
                                    <path d="M6.9,30H0.6V9.6h6.3V30z M3.7,7c-2.3,0-3.4-1-3.4-3.1c0-0.9,0.3-1.6,1-2.2C2,1,2.8,0.7,3.7,0.7c2.3,0,3.4,1.1,3.4,3.1 C7.1,5.9,6,7,3.7,7L3.7,7z M30.2,30h-6.4V18.6c0-3-1-4.5-3.1-4.5c-1.6,0-2.7,0.8-3.3,2.5c-0.2,0.3-0.3,0.8-0.3,1.6V30h-6.4V16.1 c0-3.1,0-5.3-0.1-6.5H16l0.4,2.7c1.4-2.2,3.5-3.3,6.4-3.3c2.2,0,3.9,0.8,5.3,2.3c1.4,1.5,2,3.7,2,6.6V30z M30.2,30"/>
                                </g>
                            </svg>
                        </a> 
                    </figure>
                </div>
                <div className="email">
                    <a href="mailto:ivana.gilich@gmail.com">or email me here</a>
                </div>
            </div>
        </div>
    )
}

export default footer;