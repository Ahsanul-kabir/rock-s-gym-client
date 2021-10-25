import React from 'react';
import './Map.css'

const Map = () => {
    return (
        <div className="map">
            <section class="mt-5 container">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.095885694224!2d90.38499431498123!3d23.74395988459254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b9c07b1693%3A0xe3defcf29e04f9e7!2sPriyoShop.com!5e0!3m2!1sen!2sbd!4v1610637019966!5m2!1sen!2sbd"
                        width="100%" height="200" frameborder="0" style={{ border: '10px solid gray' }} aria-hidden="false" tabindex="0" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    );
};

export default Map;