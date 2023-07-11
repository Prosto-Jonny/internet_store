import React from 'react';
import banner from '../img/banner.jpg'
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from '../utils/consts';

const SmallBanner = () => {
    return (
        <div class="banner">
            <div class="container">
                <Link to={CATALOG_ROUTE} className="banner__link">
                    <img src={banner} alt="miniBanner"/>
                </Link>
            </div>
        </div>
    );
};

export default SmallBanner;