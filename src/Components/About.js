import React from 'react';

const About = () => (

     <div className="row about-content">
          <div className="col-sm-12 col-md-6 col-lg-6 about-left-side">
               <h3 className="title-about">WE ARE <strong>AMIRA</strong></h3>
                    <p>We are a leading company sit amet, consectetur adipisicing elit. Minus obcaecati pariatur officiis molestias eveniet harum laudantium obcaecati pariatur officiis molestias eveniet harum laudantium sed optio iste. </p>

                    <ul className="nav nav-tabs">
                         <li className="active"><a data-toggle="tab" href="#menu1">Our Mission</a></li>
                         <li><a data-toggle="tab" href="#menu2">Our advantages</a></li>
                         <li><a data-toggle="tab" href="#menu3">Our guarantees</a></li>
                    </ul>

                    <div className="tab-content">
                         <div id="menu1" className="tab-pane fade in active">
                              <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                         </div>
                         <div id="menu2" className="tab-pane fade">
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                         </div>
                         <div id="menu3" className="tab-pane fade">
                              <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                         </div>
                    </div>

                    <a className="custom-button" href="about.html">Learn more about us</a>
                    <div className="col-md-6 col-lg-6 about-right-side">
                         <div className="full-image-container hovered">
                              <img className="img-responsive hidden-xs" src="http://via.placeholder.com/1024x681" alt="" />
                              <div className="full-image-overlay">
                                   <h3>Why <strong>Choose Us</strong></h3>
                                   <ul className="list-why-choose-us">
                                        <li>Clean Code & Design</li>
                                        <li>Responsive Layout</li>
                                        <li>Powerful Documentation</li>
                                        <li>Browser Compatibility</li>
                                        <li>Easy Customization</li>
                                        <li>& Much More ...</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>

          </div>




          );
          
export default About;