import React from 'react';

const NavBar = () => (
    <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">
        <ul className="nav navbar-nav" id="main-navigation">
            <li className="active"><a href="index-kenburns.html"><i className="fa fa-home"></i> Home</a></li>
            <li><a href="about.html"><i className="fa fa-user"></i> About Us</a></li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-image"></i> portfolio <i className="fa fa-angle-down icon-angle"></i></a>
            </li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-edit"></i> Blog <i className="fa fa-angle-down icon-angle"></i></a>
            </li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-file-text-o"></i> pages <i className="fa fa-angle-down icon-angle"></i></a>
            </li>
            <li><a href="contact.html"><i className="fa fa-envelope"></i> Contact</a></li>

            <li className="cart hidden-xs hidden-sm"><a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i></a></li>

            <li className="search hidden-xs hidden-sm"><button id="search-button" className="fa fa-search"></button></li>
        </ul>


    </div>



);

export default NavBar;