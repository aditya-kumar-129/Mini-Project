import React from "react";
import "./Home.css";
import fr2 from "../myImages/crousal-image1.jpg";
import img1 from "../myImages/crousal-image3.jpg";
import fr3 from "../myImages/fr3.jpg";
import c1 from "../myImages/c1.jpg";
import c2 from "../myImages/c2.jpg";
import c3 from "../myImages/c3.jpg";
import c4 from "../myImages/c4.jpg";
import c5 from "../myImages/c5.jpg";
import c6 from "../myImages/c6.jpg";
import styles from "./home.module.css";

export default function home() {
  return (
    <>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://theconversation.com/elite-sport-time-to-scrap-the-therapeutic-exemption-system-of-banned-medicines-89252">
                <img src={fr2} className="d-block w-100" alt="..." />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://journals.lww.com/acsm-csmr/Fulltext/2017/05000/Make_Sport_Great_Again__The_Use_and_Abuse_of_the.7.aspx">
                <img src={fr3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3 className={styles.heading}>Significance of TUE Doping</h3>
                  <p className={styles.text}>
                    Taking advantage of the system and abusing it
                  </p>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2219897/">
                <img src={img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h3 className={styles.heading}>
                    Doping in sports and its spread to at-risk populations: an
                    international review
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="content mb-5 text-center">
        <h1 className="text-center mb-5 display-3">Feed</h1>

        <div className="row mt-4 mb-4 ms-auto me-auto">
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c1}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">DIET</h3>
                <p className="card-text">
                  Food Items You Can Easily Consumed By Sports Person are
                  Cereal, pulses,vegetable,fruits,Milk and Milk products,Meat,
                  Fish and Egg 7.Oil: 1.5 Tbsp/ day Olive oil, Mustard Oil.
                </p>
                <a href="/diet" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c2}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Sleep</h3>
                <p className="card-text">
                   Recommendations for athletes range between seven and nine
                  hours nightly17. Elite athletes are encouraged to get at least
                  nine hours of sleep nightly.
                </p>
                <a href="/sleep" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c3}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Hygiene</h3>
                <p className="card-text">
                  Hand washing for at least 20 seconds, and showering at home
                  before and after physical activity, is crucial for good
                  hygiene – please encourage all those taking part to do so.
                </p>
                <a href="/hygiene" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4 ms-auto me-auto">
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c4}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Harmful effects of doping</h3>
                <p className="card-text">
                  Safety first! The most important reason doping is a big deal
                  is the fact that many of these substances can have harmful and
                  long-lasting side effects
                </p>
                <a href="/harmfulEffects" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c5}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Motivation in sports</h3>
                <p className="card-text">
                  Motivation is the mental process that initiates, sustains or
                  guides an athlete’s behavior like - training, approach to
                  competition, managing adversity, performance.
                </p>
                <a href="/motivation" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="container-md col-lg">
            <div className="card ms-auto me-auto">
              <img
                src={c6}
                className="card-img-top"
                alt="..."
                style={{ height: "22rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">Good habbits in sports</h3>
                <p className="card-text">
                  Training, putting in the time and energy to be successful is
                  the most obvious action. But how you do it counts. And it
                  applies to all levels of athletes.
                </p>
                <a href="/goodHabits" className="btn btn-primary mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
