import React from "react";
import facebook from "../myImages/facebook.png";
import instagram from "../myImages/instagram.png";
import linkedin from "../myImages/linkedin.png";
import twitter from "../myImages/twitter.png";
import "./Styles.css";
import {Link} from 'react-router-dom';
import styles from './footer.module.css'

export default function footer() {
  return (
    <footer className="page-footer font-small text-light bg-dark mdb-color pt-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left mt-3 pb-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Dopify</h6>
            <p>
              We are a bunch of college students looking to solve an existing
              problem in the fitness and sports field by using our technical
              skills.
            </p>
            <Link className="btn btn-primary btn-sm mb-2" to="/about">Read More</Link>
          </div>

          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p><Link to="/home" className={styles.link}>Home</Link></p>
            <p><Link to="/profile" className={styles.link}>Profile</Link></p>
            <p><Link to="/ocr" className={styles.link}>Search Substances</Link></p>
            <p><Link to="/discussion" className={styles.link}>Discussions</Link></p>
            <p><Link to="/about" className={styles.link}>About Us</Link></p>
            <p><Link to="/chat" className={styles.link}>FAQs</Link></p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i>MS Ramaiah Institue of Technology</p>
            <p><i className="fas fa-envelope mr-3"></i>adityakumar93340@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 6201984499</p>
            <p><i className="fas fa-print mr-3"></i> +91 7482823546</p>
          </div>
        </div>

        <hr />

        <div className="footer_copy">
          <div className="container">
            <div className="column one">
              <div className="copyright">
                &copy; 2022 Dopify. All Rights Reserved.
                <br />
                <br />
                <span>
                  <Link className="footlogo" to="/"><img src={facebook} alt="facebookIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={linkedin} alt="linkedenIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={twitter} alt="twitterIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={instagram} alt="instagramIcon" width="50px" height="50px"/></Link>
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}