import React from 'react';
import './ServiceKnow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import img1 from '../../../resources/images/carousel-1.jpg';
import img2 from '../../../resources/images/carousel-2.jpg';
import img3 from '../../../resources/images/carousel-3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import Footer from '../../components/Footer/Footer';

const ServiceKnow = () => {
    return (
        <div className="serviceKnow">
            <Navbar />
            <section class="blog" id="blog">
                <div class="containerService">
                    <div class="title">
                        <h2>Latest Gym News</h2>
                    </div>
                    <div class="blog-content">

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img1} alt="Not Found......." />
                                <span><i> <FontAwesomeIcon icon={faHeart}/></i></span>
                            </div>
                            <div class="blog-text">
                                <span>20 January, 2021</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                            </div>
                        </div>

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img2} alt="" />
                                <span><i> <FontAwesomeIcon icon={faHeart}/></i></span>
                            </div>
                            <div class="blog-text">
                                <span>10 May, 2021</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                            </div>
                        </div>

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img3} alt="" />
                                <span><i> <FontAwesomeIcon icon={faHeart}/></i></span>
                            </div>
                            <div class="blog-text">
                                <span>20 December, 2021</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="about" id="about">
                <div class="container">
                    <div class="about-content">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div class="about-text">
                            <div class="title">
                                <h2>Lorem ipsum dolor</h2>
                                <p>Design is my passion</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam voluptatem saepe eius ipsum nam provident sapiente, natus et vel eligendi laboriosam odit eos temporibus impedit veritatis ut, illo deserunt illum voluptate quis beatae quod. Necessitatibus provident dicta consectetur labore!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti natus, eos quia recusandae voluptatem veniam modi officiis minima provident rem sint porro fuga quos tempora ea suscipit vero velit sed laudantium eaque necessitatibus maxime!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
};

export default ServiceKnow;