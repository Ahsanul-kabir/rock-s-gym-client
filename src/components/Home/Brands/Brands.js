import React from 'react';
import './Brands.css'

// For look good serial logo
import brand1 from '../../../resources/images/brand1.svg'
import brand2 from '../../../resources/images/brand5.svg'
import brand3 from '../../../resources/images/brand2.svg'
import brand4 from '../../../resources/images/brand3.svg'
import brand5 from '../../../resources/images/brand4.svg'

const Brands = () => {
    return (
        <div className="brand-wrap">
            <h1 style={{textAlign:"center"}}>Our Another Services</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 offset-md-1 brand-logo">
                        <img src={brand1} alt="" />
                        <img src={brand4} alt="" />
                        <img src={brand3} alt="" />
                        <img src={brand2} alt="" />
                        <img src={brand5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;