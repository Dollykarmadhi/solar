import Home from './Home';
import React , {useState} from 'react';
import OurService from './Our-Service';
import AboutUs from './About-us';
import Project from './Project';
import Video from './Video';
import LandMark from './Landmark';
import Blog from './Blog';
import Team from './Team';
import ContactUs from './Contact-us';
import Map from './Map';
import Footer from './Footer'

export default function Page({ children }) {

    return (
        <div className="page" >
            <Home />
            <AboutUs/>
            <OurService/>
           
            <Project/>
            <Video/>
           
            <Team/>
            <LandMark/>
            <Blog/>
           
            <Map/>
            <ContactUs/>
            <Footer/>
           
        </div>
    )
}