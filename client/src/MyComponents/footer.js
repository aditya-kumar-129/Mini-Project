import React from 'react';
import facebook from '../myImages/facebook.png';
import instagram from '../myImages/instagram.png';
import linkedin from '../myImages/linkedin.png';
import twitter from '../myImages/twitter.png';
import './Styles.css';


export default function footer() {
    return (
        
            <footer className="page-footer font-small text-light bg-dark mdb-color pt-4">


                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left mt-3 pb-3">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Sportify</h6>
                        <p>We are a bunch of college students looking to solve an existing problem in the fitness and sports field by using our technical skills.</p>
                        <a className="btn btn-primary btn-sm mb-2" href="/about" role="button">Read More</a>
                    </div>


                    <hr className="w-100 clearfix d-md-none"/>


                    


                    <hr className="w-100 clearfix d-md-none"/>


                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p>
                                                   
                        <a href="/home" className='text-decoration-none'>Home</a>
                        </p>
                        <p>
                       
                                                   
                        <a href="/profile" className='text-decoration-none'>Profile</a>
                        </p>
                        <p>                                        
                           <a href="/ocr" className='text-decoration-none'>Search Substances</a>
                        </p>
                        <p>                                            
                        <a href="/discussion" className='text-decoration-none'>Discussions</a>
                        </p>
                        <p>
                        <a href="/about" className='text-decoration-none'>About Us</a>
                        </p>
                        <p>
                                                   
                        <a href="/chat" className='text-decoration-none'>FAQs</a>
                        </p>
                        
                        
                        
                        
                    </div>

                    <hr className="w-100 clearfix d-md-none"/>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                        <i className="fas fa-home mr-3"></i>MS Ramaiah Institue of Technology</p>
                        <p>
                        <i className="fas fa-envelope mr-3"></i> ashishgurram123@gmail.com</p>
                        <p>
                        <i className="fas fa-phone mr-3"></i> +91 8297706028</p>
                        <p>
                        <i className="fas fa-print mr-3"></i> +91 8058826666</p>
                    </div>

                </div>

                    <hr/>

<div className="footer_copy">
<div className="container">
    <div className="column one">

                            
        <div className="copyright">
            &copy; 2022 Sportify. All Rights Reserved.					
            <br /><br />
        <span >
            <a className='footlogo' href="#">
                <img src={facebook} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a className='footlogo' href="#">
                <img src={linkedin} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a className='footlogo' href="#">
                <img src={twitter} width='50px' height='50px'/>
            </a>
            <span> </span>
            <a className='footlogo' href="#">
                <img src={instagram} width='50px' height='50px'/>
            </a>
        </span>

        </div>
        <br />
    </div>
</div>
</div>
                </div>

            </footer>
    )
}









