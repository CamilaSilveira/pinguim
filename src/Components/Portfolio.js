import React from 'react';
import port1 from '../assets/img/port1.jpg';
import port2 from '../assets/img/port2.jpg';
import port3 from '../assets/img/port3.jpg';
import port4 from '../assets/img/port4.jpg';
import port5 from '../assets/img/port5.jpg';
import port6 from '../assets/img/port6.jpg';
import port7 from '../assets/img/port7.jpg';
import port8 from '../assets/img/port8.jpg';

const Portfolio = () => (
    <div className="services">
    <div className="container">

        <div className="text-center top-text">
            <h1><span>Our</span> Portfolio</h1>
            <h4>Our latest Works</h4>
        </div>

        <div className="main">
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src={port1} alt="foto1" />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src={port2} alt="Lights" />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src={port3} alt="Nature" />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                        <img src={port4} alt="Mountains" />
                        <h3>My Work</h3>
                        <p>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
);

export default Portfolio;