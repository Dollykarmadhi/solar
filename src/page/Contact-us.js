import React from "react";
import Form from 'react-bootstrap/Form';

const ContactUs = () => {
    return (
        <>
            <div className="contact-us" id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="contact-inner">
                                <div className="contact-title text-center">
                                    <h1>ContactUs</h1>
                                </div>
                                <div className="contact-text pt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh massa varius.</p>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-lg-4 col-12">
                                        <div className="contect-add">
                                            <h3>Address</h3>
                                            <p>Besides Satellite police station, Ramdevnagar Cross Road, Satellite Rd, Ahmedabad - 380015 Gujarat.</p>
                                        </div>
                                        <div className="contect-add">
                                            <h3>Phone Number</h3>
                                            <p>079 4020 0000</p>
                                        </div>
                                        <div className="contect-add">
                                            <h3>E-mail address</h3>
                                            <p> inquiry@shivalikgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <from>
                                            <div className="row">
                                                <div className="col-md-5 col-12">
                                                    <div class="mb-3 form-input">
                                                        <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                                                    </div>
                                                    <div class="mb-3 form-input ">
                                                        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                                    </div>
                                                    <div class="mb-3 form-input">
                                                        <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="subject" />
                                                    </div>
                                                    

                                                </div>
                                                <div className="col-md-5 col-12">
                                                    <div className="msg-box">
                                                        <textarea  placeholder="Massage" id="floatingTextarea2"></textarea>
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-md-10 col-12">
                                                        <input type="submit" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" className="form-submit"/>
                                                    </div>
                                            </div>
                                        </from>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;