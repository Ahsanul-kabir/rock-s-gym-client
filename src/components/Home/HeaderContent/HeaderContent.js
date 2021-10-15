import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../resources/images/header_background.jpg'

const HeaderContent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h1 className="mb-5">We Build <br />Your Dream</h1>
                    <p style={{ marginBottom: "5px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    {/* <button className="btn btn-primary main-btn">Booking</button> */}
                    <Link to="/order/:name" ><button className="btn btn-primary main-btn">JOIN US</button></Link>
                </div>
                <div className="col-md-7 col-sm-12 offset-md-1">
                    <img className="img-fluid" style={{ width: '80%', borderRadius: '10px' }} src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;