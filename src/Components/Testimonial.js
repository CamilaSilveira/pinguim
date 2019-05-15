import React from 'react';

const Testimonial = () => (

    <div className="testimonials">
        <div className="section-overlay">

            <div className="container">

                <div className="text-center top-text">
                    <h1><span>Happy</span> Customers</h1>
                    <h4>Testimonials</h4>
                </div>

                <div id="quote-carousel" className="carousel slide" data-ride="carousel">

                   

                    <div className="carousel-inner">

                        <div className="item active">
                            <blockquote>
                                <img className="img-circle img-responsive" src="http://via.placeholder.com/112x112" alt="client" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat</p>
                                <h5>Miss Elina Pool</h5>
                                <h6>Developer - Adobe</h6>
                            </blockquote>
                        </div>

                        <div className="item">
                            <blockquote>
                                <img className="img-circle img-responsive" src="http://via.placeholder.com/112x112" alt="client" />
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                                <h5>Mr. Antoine Varane</h5>
                                <h6>Manager - Twitter</h6>
                            </blockquote>
                        </div>

                        <div className="item">
                            <blockquote>
                                <img className="img-circle img-responsive" src="http://via.placeholder.com/112x112" alt="client" />
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                <h5>Miss Lucy Walker</h5>
                                <h6>Manager - Envato</h6>
                            </blockquote>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
);

export default Testimonial; 