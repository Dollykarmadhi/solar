import React from "react";
import Slider from 'react-slick';


const Project = () => {
    const settings = {
        dots: false,

        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        loop: true,
        autoplay: true,

        // vertical: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],


    };

    return (
        <>

            <div className="project" id="Project">
                <div className="container">
                    <div className="row">
                        <div className="project-inner">
                            <div className="project-title text-center">
                                <h1>Projects</h1>
                            </div>
                            <div className="row pt-5">
                                <Slider {...settings}>
                                    <div className="ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-1.webp" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-2.webp" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-3.jpg" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-4.jpg" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-5.png" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-6.jpg" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ps-3">
                                        <div className="project-image">
                                            <img src="/image/project-7.jpg" alt="" />
                                            <div className="project-conten">
                                                <h3>Callater Lodge</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Project;