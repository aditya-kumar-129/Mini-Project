import React from 'react';
import img from '../myImages/aboutus.gif';
import img1 from '../myImages/ashish.jpg';
import img2 from '../myImages/subinoy.jpg';
import img3 from '../myImages/shree.jpg';
import img4 from '../myImages/jayesh.jpg';
import img5 from '../myImages/chirag.jpg';
import img6 from '../myImages/videh.jpg';
import './Styles.css';

const mystyle = {
    height: '70vh',
    width: '85vw'
};

export default function about() {
    return (
            <>
                <div className='container mt-5 mb-4 ms-auto me-auto'>
                    <div className="container mt-5 mb-4 ms-auto me-auto">
                        
                        <h1 className='fs-1 mt-2 mb-4  '>Vision and Mission</h1>
                        <hr className='bg-dark border-2 border-top border-dark ms-2 me-2'/>
                    </div>
                    <div className="container mt-4 ms-auto me-auto text-center">
                        <img src={img} id="aboutus" className="img-responsive" alt="..." />
                    </div>
                    <div className='container mt-4 mb-5 ms-auto me-auto '>                  
                       
                        <p className='fs-5 fw-light mt-5 text-left'>We aim to solve existing problems in the fields of firness and sports by using modern technology like ocr to avoid
prohibited drugs in lack of knowledge of doping in sports ,and we also aim to spread awareness regarding the 
significance if TUE doping in sports and also, aim to connect genral people to sport person and health experts 
with the help of a social media platform through which they can converse about various queries and get awared 
about various prohibited substances in food items.
</p>
                        <p className='fs-5 fw-light mt-4 text-left'></p>
                        <p className='fs-5 fw-light mt-4 text-left'></p>                        
                    </div>   
                </div>


                <div className='container mt-5 mb-4 ms-auto me-auto'>
                    <div className="container mt-5 mb-4 ms-auto me-auto">
                        <h1 className='fs-1 mt-2 mb-4  '>About The Team</h1>
                        <hr className='bg-dark border-2 border-top border-dark ms-2 me-2'/>
                    </div>                     
                </div>
                <div className="row mt-4 mb-4 ms-auto me-auto">


                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                            <img src={img1} className="card-img-top center" alt="..." style={{width:'200px'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Ashish Gurram</h3>
                                    <p className="card-text">ashishgurram123@gmail.com</p>
                                    <p className="card-text">MSRIT ECE</p>
                                    
                                </div>
                            </div>
                </div>
                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={img3} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Shree Ahuja</h3>
                                    <p className="card-text">ahuja.shree31@gmail.com</p>
                                    <p className="card-text">MSRIT CSE</p>
                                    
                                </div>
                            </div>
                </div>
                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={img2} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Subinoy Karmakar</h3>
                                    <p className="card-text">subinoy2001@gmail.com</p>
                                    <p className="card-text">MSRIT CSE</p>
                                    
                                </div>
                            </div>
                </div>
                <div className="row mt-4 mb-4 ms-auto me-auto">
                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={img5} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Chirag Sinha</h3>
                                    <p className="card-text">chirag.suman2025@gmail.com</p>
                                    <p className="card-text">MSRIT EIE</p>
                                    
                                </div>
                            </div>
                </div>
                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={img4} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Jayesh Goyal</h3>
                                    <p className="card-text">jayeshgoyal28@gmail.com</p>
                                    <p className="card-text">MSRIT ISE</p>
                                    
                                </div>
                            </div>
                </div>
                <div className="container-md col-lg">
                            <div className="card ms-auto me-auto">
                                <img src={img6} className="card-img-top" alt="..." style={{height:'22rem'}}/>
                                <div className="card-body">
                                    <h3 className="card-title">Videh Nandini</h3>
                                    <p className="card-text">jayeshgoyal28@gmail.comvidehnandini75@gmail.com</p>
                                    <p className="card-text">MSRIT CSE</p>
                                    
                                </div>
                            </div>
                </div>

                </div>            
               
                
                           



                </div>
                
             
            </>
    )
}
