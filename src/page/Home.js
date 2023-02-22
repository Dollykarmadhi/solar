import { Button } from 'react-bootstrap'
import React, { useState } from "react";
import Slider from 'react-slick';

const Home = () => {
    // const [nav1, setNav1] = useState();
    const settings = {
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        loop:true, 
        autoplay:true,
        arrows:false,
      };



    return <>
        <div className="hero">

            <Slider {...settings}>
                <div className='slider-img'>
                    <div className='container'>
                        <div className="content">
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <h1 className='mb-4'>WE BUILD <span>GREAT PROJECTS</span></h1>
                                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                    <div>
                                        <Button variant="warning" className='btn'>Projects</Button>
                                        <Button variant="light" className='btn'>Contact</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-img2'>
                    <div className='container'>
                        <div className="content">
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <h1 className='mb-4'>WE BUILD <span>GREAT PROJECTS</span></h1>
                                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                    <div>
                                        <Button variant="warning" className='btn'>Projects</Button>
                                        <Button variant="light" className='btn'>Contact</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-img3' >

                    <div className='container'>
                        <div className="content">
                            <div className='col-lg-6'>
                                <div className='mt-5'>
                                    <h1 className='mb-4'>WE BUILD <span>GREAT PROJECTS</span></h1>
                                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                                    <div>
                                        <Button variant="warning" className='btn'>Projects</Button>
                                        <Button variant="light" className='btn'>Contact</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </>
}
export default Home;