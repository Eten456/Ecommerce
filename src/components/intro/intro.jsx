import React from 'react';
import './intro.scss';
import homepageImage from '../../files/homepage-image.jpg';

export default function Intro() {
    return (
        <div className="intro">
            <div className="image-section">
                <img src={homepageImage} alt="homepage design" className="homepage-image" />
            </div>
            <div className="text-section">
                <h2>Summer Sale</h2>
                <p>Don't compromise on style! Shop 30% off a selected range</p>
                <button>Shop Now</button>
            </div>
        </div>
    )
}
