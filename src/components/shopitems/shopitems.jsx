import React from 'react'
import image from '../../files/slide-1.jpg';
import './shopitems.scss';

export default function ShopItems() {
    return (
        <div className="shopitems">
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#"className="item-image" />
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
            <div className="itemContainer">
                <img src={image} alt="#" className="item-image"/>
            </div>
        </div>
    )
}
