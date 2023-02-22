import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from 'react-icons'
import React, { useState, useEffect } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 50);
    //     });
    // }, []);
    return (
        <>
            <header className="web-header d-md-block d-none">
                <div className='container'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='header-logo col-2'>
                            {/* <img src='/image/logo8.png' /> */}

                            <a href='index.js'><h1>Architect</h1></a>
                        </div>
                        <div className='col-8'>
                            <Nav className="d-flex align-items-center list-unstyled text-uppercase navbar">
                                <Nav.Link href="/" className=''>Home</Nav.Link>
                                <Nav.Link href="#About-us" className=''>About Us</Nav.Link>
                                <Nav.Link href="#Our-Service " className=''>Our Service</Nav.Link>
                                <Nav.Link href="#Project" className=''>Project</Nav.Link>
                                <Nav.Link href="#Team" className=''>Our Teams</Nav.Link>
                                <Nav.Link href="#Blog" className=''>Blog</Nav.Link>
                                <Nav.Link href="#contact-us" className=''>Contact US</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </header>
            <header className='d-block d-md-none mobile-header'>
                <ul className='d-flex align-items-center justify-content-between'>
                    <li><a href='#'><img src='/image/home5.png' alt='' /></a></li>
                    <li><a href='#'><img src='/image/contact02.png' alt='' /></a></li>
                    <li><a href='#'><img src='/image/search.png' alt='' /></a></li>
                    <li><a href='#'><img src='/image/more.png' alt='' /></a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;