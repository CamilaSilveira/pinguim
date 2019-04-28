import React from 'react';

const Header = () => (

   <div className="navbar">

      <div className="logo">
         <a data-toggle="collapse" data-target=".navbar-collapse.show" className="navbar-brand" href="index-kenburns.html">
            <img id="logo-light" className="logo-light" src="./img/Logo.jpg" alt="logo-light" />
         </a>
      </div>

      <button className="navbar-toggle navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span id="icon-toggler">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </span>
      </button>

      <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">

         <ul className="nav navbar-nav" id="main-navigation">
            <li className="active"><a href="index-kenburns.html"><i className="fa fa-home"></i> Home</a></li>
            <li><a href="about.html"><i className="fa fa-user"></i> About Us</a></li>
            <li><a href="portfolio.html"><i className="fa fa-image"></i> Portfolio</a></li>
            <li><a href="gallery-project.html"> Gallery </a></li>
            <li><a href="servives.html" ><i className="fa fa-edit"></i> Services</a></li>
            <li><a href="contact.html"><i className="fa fa-envelope"></i> Contact</a></li>
         </ul>

      </div>

      <div className="site-search hidden-xs">
         <div className="search-container">
            <input id="search-input" type="text" placeholder="type your keyword and hit enter ..." />
               <span className="close">×</span>
         </div>
      </div>

  
 </div>
);

export default Header;