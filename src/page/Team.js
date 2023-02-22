import React from "react";
import Slider from 'react-slick';

const settings = {
    dots: false,

    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    loop: true,
    autoplay: true,

    //  vertical: true,
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

const Team = () => {
    return (
        <>
            <div className="team" id="Team">
                <div className="container">
                    <div className="row">
                        <div className="team-inner">
                            <div className="team-title text-center">
                                <h1>Our Team</h1>
                            </div>
                            <div className="row pt-5">
                                <Slider {...settings}>
                                    <div>
                                        <div className="team-image ">
                                            <img src="/image/team-01.jpg" alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-02.jpg" alt="" />
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-03.jpg" alt=""/>
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-04.jpg" alt=""/>

                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-01.jpg" alt=""/>
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-02.jpg" alt=""/>
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="team-image">
                                            <img src="/image/team-03.jpg" alt=""/>
                                        </div>
                                        <div className="team-text">
                                            <h4>Richard Wagner</h4>
                                            <p>Civil Engineer</p>
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
export default Team;