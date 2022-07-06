import React from "react";
import jayesh_image from "../myImages/jayesh image.jpg";
import aditya_image from "../myImages/aditya image.jpg";
import gaurav_image from "../myImages/gaurav image.jpg";
import "./Styles.css";
import classes from "./about.module.css";

export default function about() {
  return (
    <>
      <div className="container mt-5 mb-4 ms-auto me-auto">
        <div className="container mt-5 mb-4 ms-auto me-auto">
          <h1 className="fs-1 mt-2 mb-4  ">Vision and Mission</h1>
          <hr className="bg-dark border-2 border-top border-dark ms-2 me-2" />
        </div>
        <div className="container mt-4 mb-5 ms-auto me-auto ">
          <p className="fs-5 fw-light mt-5 text-left">
            We aim to solve existing problems in the fields of fitness and
            sports by using modern technology like OCR to avoid prohibited drugs
            in lack of knowledge of doping in sports , and we also aim to spread
            awareness regarding the significance if Therapeutic Use Exemption
            (TUE) doping in sports and also, aim to connect from general people
            to sport person and health experts with the help of a social media
            platform through which they can clarify about various queries and
            get awared about various prohibited substances in food items.
          </p>
        </div>
      </div>

      <div className="container mt-5 mb-4 ms-auto me-auto">
        <div className="container mt-5 mb-4 ms-auto me-auto">
          <h1 className="fs-1 mt-2 mb-4  ">About The Team</h1>
          <hr className="bg-dark border-2 border-top border-dark ms-2 me-2" />
        </div>
      </div>

      <div className={classes.wrap}>
        <div className="row mt-4 mb-4 ms-auto me-auto">
          <div className="row mt-4 mb-4 ms-auto me-auto">
            <div className="container-md col-lg">
              <div className="card ms-auto me-auto">
                <img
                  src={aditya_image}
                  className={classes.image}
                  alt="AdityaImage"
                  style={{ height: "22rem" }}
                />
                <div className="card-body">
                  <h3 className={classes.title}>Aditya Kumar</h3>
                  <p className={classes.text}>1MS19IS006@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="container-md col-lg">
              <div className="card ms-auto me-auto">
                <img
                  src={gaurav_image}
                  className={classes.image}
                  alt="GauravImage"
                  style={{ height: "22rem" }}
                />
                <div className="card-body">
                  <h3 className={classes.title}>Gaurav Gupta</h3>
                  <p className={classes.text}>1MS19IS040@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="container-md col-lg">
              <div className="card ms-auto me-auto">
                <img
                  src={jayesh_image}
                  className={classes.image}
                  alt="JayeshImage"
                  style={{ height: "22rem" }}
                />
                <div className="card-body">
                  <h3 className={classes.title}>Jayesh Goyal</h3>
                  <p className={classes.text}>1MS19IS052@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
