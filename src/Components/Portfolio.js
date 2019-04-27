import React from 'react';

const Portfolio = () => (
    <div className="container">

        <div className="text-center top-text">
            <h1><span>Our</span> Portfolio</h1>
            <h4>Our latest Works</h4>
        </div>


        <div className="divider text-center">
            <span className="outer-line"></span>
            <span className="fa fa-image" aria-hidden="true"></span>
            <span className="outer-line"></span>
        </div>
        <nav>
            <ul className="simplefilter nav nav-pills">

                <li className="active" data-filter="all"><i className="fa fa-reorder"></i> All Projects</li>
                <li data-filter="1">Images</li>
                <li data-filter="2">Videos</li>
                <li data-filter="3">External Links</li>

            </ul>
        </nav>
    </div>
);

export default Portfolio;