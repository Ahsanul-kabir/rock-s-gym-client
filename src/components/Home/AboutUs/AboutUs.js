import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const AboutUs = () => {
    const styleCss = {
        margin: "5rem auto",
        padding: "2rem",
        background: '#02aa94',
        border: '10px solid'
    }

    return (
        <section>
            <Navbar></Navbar>
            <Service />
            <Footer />
        </section>
    );
};

export default AboutUs;