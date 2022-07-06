import React from 'react';
import logo from '../myImages/logo.png';
import './Styles.css';

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <div className="container-fluid">
                <a className="nav-link active navbar-brand" aria-current="page" href="home"><img src= {logo} width='250px' height='80px'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="home"><span className="nva" >Home</span></a>
                            </li>
    
                            <li className="nav-item ms-2 me-2">
                              <a className="nav-link active" aria-current="page" href="profile"><span className="nva" >Profile</span></a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                              <a className="nav-link active" aria-current="page" href="ocr"><span className="nva" >Search Substances</span></a>
                            </li>
                            
                            <li className="nav-item ms-2 me-2">
                              <a className="nav-link active" aria-current="page" href="discussion"><span className="nva" >Discussions</span></a>
                            </li>

                            <li className="nav-item ms-2 me-2">
                              <a className="nav-link active" aria-current="page" href="about"><span className="nva" >About US</span></a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                              <a className="nav-link active" aria-current="page" href="signout"><span className="nva" >Sign Out</span></a>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
